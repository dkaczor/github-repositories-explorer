import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "api/helpers";
import { ReducerName } from "./Users.constants";
import { User } from "./Users.types";

export const fetchGitHubUsers = createAsyncThunk<User[], string>(
  `${ReducerName}/fetchSelectedUser`,
  (userName: string) => {
    try {
      const response = fetchData<User[]>(
        `${process.env.REACT_APP_API_URL}search/users?q=${userName}`
      );
      return response;
    } catch (err) {
      return err;
    }
  }
);
