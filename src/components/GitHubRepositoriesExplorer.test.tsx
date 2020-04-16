import React from "react";
import { render } from "utils/configureRender";
import GitHubRepositoriesExplorer from "./GitHubRepositoriesExplorer";
import { initialState } from "utils/initialStates";
import { fireEvent } from "@testing-library/react";

test("test rendering of initial screen", () => {
  const { queryByText } = render(<GitHubRepositoriesExplorer />, {
    initialState,
  }).component;
  expect(queryByText("Showing users for", { exact: false })).toEqual(null);
});

test("test dispatch to store", () => {
  const renderedComponent = render(<GitHubRepositoriesExplorer />, {
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
