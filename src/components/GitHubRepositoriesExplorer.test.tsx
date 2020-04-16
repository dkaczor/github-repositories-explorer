import React from "react";
import { render } from "utils/configureRender";
import GitHubRepositoriesExplorer from "./GitHubRepositoriesExplorer";
import { initialState } from "utils/initialStates";
import { fireEvent } from "@testing-library/react";

test("test rendering of initial screen", () => {
  const { queryByText, queryByPlaceholderText, queryByRole } = render(
    <GitHubRepositoriesExplorer />,
    {
      initialState,
    }
  );
  expect(queryByText("Showing users for", { exact: false })).toEqual(null);
});

test("test typical scenario", () => {
  const { queryByText, getByPlaceholderText, getByRole } = render(
    <GitHubRepositoriesExplorer />,
    {
      initialState,
    }
  );
  let searchInput = getByPlaceholderText("Enter username");
  console.log(fireEvent.change(searchInput, { target: { value: "test1" } }));
});
