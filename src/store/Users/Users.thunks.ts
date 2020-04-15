import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "api/helpers";
import { ReducerName } from "./Users.constants";

export const fetchGitHubUsers = createAsyncThunk<any, string>(
  `${ReducerName}/fetchSelectedUser`,
  (userName: string) =>
    fetchData(`https://api.github.com/search/users?q=${userName}`)
);
