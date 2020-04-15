import { createSlice } from "@reduxjs/toolkit";
import { fetchGitHubUserRepositories } from "./Repositories.thunks";
import { ReducerName } from "./Repositories.constants";
import { LoadingInterface } from "store/Shared/Shared.types";

export interface GithubRepositoriesState extends LoadingInterface {
  githubRepositories: any[] | undefined;
}

export const githubRepositoriesSlice = createSlice({
  name: ReducerName,
  initialState: {
    loading: false,
    loaded: false,
    githubRepositories: [],
    error: undefined,
  } as GithubRepositoriesState,
  reducers: {
    destroyRepositoriesSlice: (initialState): GithubRepositoriesState =>
      initialState,
  },

  extraReducers: {
    [`${fetchGitHubUserRepositories.pending}`]: (state) => {
      state.loading = true;
      state.loaded = false;
      state.githubRepositories = [];
    },
    [`${fetchGitHubUserRepositories.fulfilled}`]: (state, action) => {
      state.loaded = true;
      state.loading = false;
      state.githubRepositories = action.payload.length
        ? action.payload
        : [{ name: "There is no repositories assigned to this user", id: 0 }];
    },
    [`${fetchGitHubUserRepositories.rejected}`]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { destroyRepositoriesSlice } = githubRepositoriesSlice.actions;
