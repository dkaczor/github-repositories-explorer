import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "api/helpers";
import { ReducerName } from "./Repositories.constants";

export const fetchGitHubUserRepositories = createAsyncThunk<any, string>(
  `${ReducerName}/fetchGitHubUserRepositories`,
  (userName: string) =>
    fetchData(`https://api.github.com/users/${userName}/repos`)
);
