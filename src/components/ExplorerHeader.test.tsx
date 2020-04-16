import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ExplorerHeader } from "./ExplorerHeader";

const onSearchButtonClick = jest.fn();
const onTextInput = jest.fn();

const PrepareComponent = (searchingText: string) => (
  <ExplorerHeader
    typedSearchingText={searchingText}
    onSearchButtonClick={onSearchButtonClick}
    onTextInput={onTextInput}
  />
);
test("test initial rendering of explorer header component", () => {
  const { queryByPlaceholderText, queryByText } = render(PrepareComponent(""));
  const searchingButton = queryByText("Search");
  expect(queryByPlaceholderText("Enter username")).toBeInTheDocument();
  expect(searchingButton).toBeInTheDocument();
  expect(
    queryByText("Showing users for", { exact: false })
  ).not.toBeInTheDocument();
});

test("test user interactions  of explorer header component", () => {
  const { getByText, getByDisplayValue } = render(PrepareComponent("test"));
  const searchingButton = getByText("Search");
  let searchingInput = getByDisplayValue("test");

  expect(searchingInput).toBeInTheDocument();
  fireEvent.change(searchingInput, { target: { value: "test1" } });
  expect(onTextInput).toBeCalled();
  fireEvent.click(searchingButton);
  expect(onSearchButtonClick).toBeCalled();
});
