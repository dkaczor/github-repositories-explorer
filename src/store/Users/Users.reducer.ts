import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGitHubUsers } from "./Users.thunks";
import { ReducerName } from "./Users.constants";
import { LoadingInterface } from "store/Shared/Shared.types";
import { User } from "./Users.types";

export interface GithubUsersState extends LoadingInterface {
  githubUsers: User[] | undefined;
  userSearchingText: string;
  searchedUserName: string;
}

export const gitHubUsersSlice = createSlice({
  name: ReducerName,
  initialState: {
    status: "initial",
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
      state.status = "loading";
    },
    [`${fetchGitHubUsers.fulfilled}`]: (state, action) => {
      state.status = "loaded";
      state.githubUsers = action.payload.items;
      state.searchedUserName = action.meta.arg;
    },
    [`${fetchGitHubUsers.rejected}`]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export const { destroyUserSlice, setSearchingInput } = gitHubUsersSlice.actions;
