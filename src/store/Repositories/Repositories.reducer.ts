import { createSlice } from "@reduxjs/toolkit";
import { fetchGitHubUserRepositories } from "./Repositories.thunks";
import { ReducerName } from "./Repositories.constants";
import { LoadingInterface } from "store/Shared/Shared.types";
import { Repository } from "./Repositories.types";

export interface GithubRepositoriesState extends LoadingInterface {
  githubRepositories: Repository[] | undefined;
}

export const githubRepositoriesSlice = createSlice({
  name: ReducerName,
  initialState: {
    status: "initial",
    githubRepositories: [],
    error: undefined,
  } as GithubRepositoriesState,
  reducers: {
    destroyRepositoriesSlice: (initialState): GithubRepositoriesState =>
      initialState,
  },

  extraReducers: {
    [`${fetchGitHubUserRepositories.pending}`]: (state) => {
      state.status = "loading";
      state.githubRepositories = [];
    },
    [`${fetchGitHubUserRepositories.fulfilled}`]: (state, action) => {
      state.status = "loaded";
      state.githubRepositories = action.payload.length
        ? action.payload
        : [{ name: "There is no repositories assigned to this user", id: 0 }];
    },
    [`${fetchGitHubUserRepositories.rejected}`]: (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    },
  },
});

export const { destroyRepositoriesSlice } = githubRepositoriesSlice.actions;
