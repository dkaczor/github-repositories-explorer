import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchGitHubUsers,
  fetchGitHubUserRepositories,
} from "./Repositories.thunks";
import { ReducerName } from "./Repositories.constants";

export interface GithubRepositoriesState {
  error: any;
  loading: boolean;
  loaded: boolean;
  githubUsers: any[] | undefined;
  githubRepositories: any[] | undefined;
  userSearchingText: string;
  searchedUserName: string;
}

export const githubRepositoriesSlice = createSlice({
  name: ReducerName,
  initialState: {
    loading: false,
    loaded: false,
    userSearchingText: "",
    searchedUserName: "",
    githubRepositories: [],
    githubUsers: [],
    error: undefined,
  } as GithubRepositoriesState,
  reducers: {
    setSearchingInput: (
      state,
      action: PayloadAction<string>
    ): GithubRepositoriesState => ({
      ...state,
      userSearchingText: action.payload,
    }),

    destroy: (initialState): GithubRepositoriesState => initialState,
  },

  extraReducers: {
    [`${fetchGitHubUsers.pending}`]: (state) => {
      state.loading = true;
      state.loaded = false;
    },
    [`${fetchGitHubUsers.fulfilled}`]: (state, action) => {
      state.loaded = true;
      state.loading = false;
      state.githubUsers = action.payload.items;
      state.searchedUserName = action.meta.arg;
    },
    [`${fetchGitHubUsers.rejected}`]: (state, action) => {
      state.error = action.payload;
    },

    [`${fetchGitHubUserRepositories.pending}`]: (state) => {
      // state.loading = true;
      // state.loaded = false;
      state.githubRepositories = [];
    },
    [`${fetchGitHubUserRepositories.fulfilled}`]: (state, action) => {
      // state.loaded = true;
      // state.loading = false;
      state.githubRepositories = action.payload;
    },
    [`${fetchGitHubUserRepositories.rejected}`]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { destroy, setSearchingInput } = githubRepositoriesSlice.actions;
