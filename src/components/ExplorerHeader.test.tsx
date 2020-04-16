import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ExplorerHeader } from "./ExplorerHeader";
import { StateTypes } from "store/Shared/Shared.types";

const onSearchButtonClick = jest.fn();
const onTextInput = jest.fn();

const PrepareComponent = (loadingState: StateTypes, searchingText: string) => (
  <ExplorerHeader
    typedSearchingText={searchingText}
    userStatusState={loadingState}
    onSearchButtonClick={onSearchButtonClick}
    onTextInput={onTextInput}
  />
);
test("test initial rendering of explorer header component", () => {
  const { queryByPlaceholderText, queryByText } = render(
    PrepareComponent("initial", "")
  );
  const searchingButton = queryByText("Search");
  expect(queryByPlaceholderText("Enter username")).toBeTruthy();
  expect(searchingButton).toBeTruthy();
  expect(searchingButton?.classList).toContain("disabled");
  expect(queryByText("Showing users for", { exact: false })).toBeFalsy;
});

test("test user interactions  of explorer header component", () => {
  const { getByText, getByDisplayValue, rerender } = render(
    PrepareComponent("initial", "test")
  );
  const searchingButton = getByText("Search");
  let searchingInput = getByDisplayValue("test");

  expect(searchingInput).toBeTruthy();
  expect(searchingButton?.classList).not.toContain("disabled");
  fireEvent.change(searchingInput, { target: { value: "test1" } });
  expect(onTextInput).toBeCalled();
  fireEvent.click(searchingButton);
  expect(onSearchButtonClick).toBeCalled();
  rerender(PrepareComponent("loading", "test1"));
  searchingInput = getByDisplayValue("test1");
  expect(searchingButton?.classList).toContain("disabled");
});
