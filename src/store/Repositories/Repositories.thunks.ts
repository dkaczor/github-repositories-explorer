import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../helpers";
import { ReducerName } from "./Repositories.constants";

export const fetchGitHubUsers = createAsyncThunk<any, string>(
  `${ReducerName}/fetchSelectedUser`,
  (userName: string) => {
    return fetchData(`https://api.github.com/search/users?q=${userName}`);
  }
);

export const fetchGitHubUserRepositories = createAsyncThunk<any, string>(
  `${ReducerName}/fetchGitHubUserRepositories`,
  (userName: string) => {
    return fetchData(`https://api.github.com/users/${userName}/repos`);
  }
);
