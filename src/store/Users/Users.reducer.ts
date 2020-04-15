import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGitHubUsers } from "./Users.thunks";
import { ReducerName } from "./Users.constants";
import { LoadingInterface } from "store/Shared/Shared.types";

export interface GithubUsersState extends LoadingInterface {
  githubUsers: any[] | undefined;
  userSearchingText: string;
  searchedUserName: string;
}

export const gitHubUsersSlice = createSlice({
  name: ReducerName,
  initialState: {
    loading: false,
    loaded: false,
    userSearchingText: "",
    searchedUserName: "",
    githubUsers: [],
    error: undefined,
  } as GithubUsersState,
  reducers: {
    setSearchingInput: (
      state,
      action: PayloadAction<string>
    ): GithubUsersState => ({
      ...state,
      userSearchingText: action.payload,
    }),

    destroyUserSlice: (initialState): GithubUsersState => initialState,
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
  },
});

export const { destroyUserSlice, setSearchingInput } = gitHubUsersSlice.actions;
