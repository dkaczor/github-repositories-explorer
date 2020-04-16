import React from "react";
import { render } from "@testing-library/react";
import { RepositoryPanels, RepositoryPanelsProps } from "./RepositoryPanels";

const mockData: RepositoryPanelsProps = {
  userRepositories: [
    {
      description: "Test description",
      id: 1,
      name: "Test name",
      stargazers_count: 1,
    },
  ],
};

test("test rendering repository panels with custom data", () => {
  const { queryByText } = render(
    <RepositoryPanels userRepositories={mockData.userRepositories} />
  );
  expect(queryByText("Test description")).toBeInTheDocument();
  expect(queryByText("Test name")).toBeInTheDocument();
  expect(queryByText("1")).toBeInTheDocument();
});

test("test rendering repository panels without data", () => {
  const { queryByText } = render(<RepositoryPanels userRepositories={[]} />);
  expect(queryByText("Test description")).not.toBeInTheDocument();
  expect(queryByText("Test name")).not.toBeInTheDocument();
  expect(queryByText("1")).not.toBeInTheDocument();
});
