import React from "react";
import { render } from "@testing-library/react";
import { RepositoryPanels, RepositoryPanelsProps } from "./RepositoryPanels";

const mockData: RepositoryPanelsProps = {
  userRepositories: [
    { description: "Test description", id: 1, name: "Test name", forks: 1 },
  ],
};

test("test rendering with custom data", () => {
  const { queryByText } = render(
    <RepositoryPanels userRepositories={mockData.userRepositories} />
  );
  expect(queryByText("Test description")).toBeTruthy;
  expect(queryByText("Test name")).toBeTruthy;
  expect(queryByText("1")).toBeTruthy;
});

test("test rendering without data", () => {
  const { queryByText } = render(<RepositoryPanels userRepositories={[]} />);
  expect(queryByText("Test description")).toBeFalsy;
  expect(queryByText("Test name")).toBeFalsy;
  expect(queryByText("1")).toBeFalsy;
});
