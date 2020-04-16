import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserSearchingResults } from "./BrowserSearchingResults";
import { StateTypes } from "store/Shared/Shared.types";
import { User } from "store/Users/Users.types";
import { Repository } from "store/Repositories/Repositories.types";

const PrepareComponent = (
  userStatus: StateTypes,
  repositoriesStatus: StateTypes,
  searchedUserName: string,
  searchingResults: User[],
  userRepositories: Repository[]
) => (
  <BrowserSearchingResults
    searchedUserName={searchedUserName}
    repositoriesStatus={repositoriesStatus}
    usersStatus={userStatus}
    searchingResults={searchingResults}
    userRepositories={userRepositories}
    onPanelClick={jest.fn()}
  />
);
test("test browser searching result with custom data", () => {
  const { queryByText, container } = render(
    PrepareComponent(
      "initial",
      "initial",
      "user",
      [{ id: 1, login: "user" }],
      [{ description: "test", id: 0, name: "test1", stargazers_count: 1 }]
    )
  );
  const userPanel = container.querySelector("div.segment > span");
  expect(
    queryByText("Showing users for", { exact: false })?.textContent
  ).toEqual("Showing users for user");
  expect(userPanel?.textContent).toEqual("user");
  fireEvent.click(userPanel!);
  expect(queryByText("Showing users for", { exact: false })).toEqual(null);
  expect(container.querySelector("i.star")).toBeInTheDocument();
  expect(queryByText("1")).toBeInTheDocument();
});
