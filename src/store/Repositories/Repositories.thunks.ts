import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "api/helpers";
import { ReducerName } from "./Repositories.constants";
import { Repository } from "./Repositories.types";

export const fetchGitHubUserRepositories = createAsyncThunk<
  Repository[],
  string
>(`${ReducerName}/fetchGitHubUserRepositories`, (userName: string) => {
  try {
    const response = fetchData(
      `https://api.github.com/users/${userName}/repos`
    );
    return response;
  } catch (err) {
    return err;
  }
});
