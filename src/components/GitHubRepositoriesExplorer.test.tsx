import React from "react";
import { renderWithStore } from "utils/testsConfigureRender";
import GitHubRepositoriesExplorer from "./GitHubRepositoriesExplorer";
import { initialState } from "utils/testsInitialStates";
import { fireEvent } from "@testing-library/react";

test("test rendering of initial screen", () => {
  const { queryByText, container } = renderWithStore(
    <GitHubRepositoriesExplorer />,
    {
      initialState,
    }
  ).component;
  expect(queryByText("Showing users for", { exact: false })).toEqual(null);
  expect(container.querySelector("div.loader")).not.toBeInTheDocument();
});

test("test dispatch to store", () => {
  const renderedComponent = renderWithStore(<GitHubRepositoriesExplorer />, {
    initialState,
  });
  const { getByPlaceholderText } = renderedComponent.component;
  const store = renderedComponent.store;
  const searchInput = getByPlaceholderText("Enter username");
  fireEvent.change(searchInput, { target: { value: "test1" } });
  const actions = store.getActions();
  const expectedPayload = {
    type: "gitHubUsersSlice/setSearchingInput",
    payload: "test1",
  };
  expect(actions).toEqual([expectedPayload]);
});
