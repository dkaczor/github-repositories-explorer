import React from "react";
import { render } from "utils/test";
import GitHubRepositoriesExplorer from "./GitHubRepositoriesExplorer";
import { RootType } from "store/root";

const initialState: RootType = {
  gitHubRepositoriesReducer: {
    status: "initial",
    githubRepositories: [],
    error: undefined,
  },
  gitHubUsersReducer: {
    status: "initial",
    userSearchingText: "",
    searchedUserName: "",
    githubUsers: [],
    error: undefined,
  },
};

test("test rendering of initial screen", () => {
  const { queryByPlaceholderText, queryByText } = render(
    <GitHubRepositoriesExplorer />,
    {
      initialState,
    }
  );
  const searchingButton = queryByText("Search");
  expect(queryByPlaceholderText("Enter username")).toBeTruthy();
  expect(searchingButton).toBeTruthy();
  expect(searchingButton?.classList).toContain("disabled");
});
