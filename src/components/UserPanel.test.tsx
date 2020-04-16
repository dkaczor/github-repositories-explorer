import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { UserPanel, BrowserSearchingPanelProps } from "./UserPanel";

const onUpdatePanelState = jest.fn();
const onPanelClick = jest.fn();
const mockData: BrowserSearchingPanelProps = {
  repositoriesStatus: "initial",
  panelId: 1,
  panelLogin: "testUser",
  panelState: 0,
  onPanelClick,
  onUpdatePanelState,
};

let RenderPanel: any = undefined;

beforeEach(() => {
  RenderPanel = (
    <UserPanel
      panelId={mockData.panelId}
      panelLogin={mockData.panelLogin}
      panelState={mockData.panelState}
      repositoriesStatus={mockData.repositoriesStatus}
      onPanelClick={mockData.onPanelClick}
      onUpdatePanelState={mockData.onUpdatePanelState}
    />
  );
});

test("test rendering user panel component with custom data", () => {
  const { queryByText } = render(RenderPanel);
  const panelName = queryByText("testUser");
  const panelIcon = panelName?.nextElementSibling;
  expect(panelName?.nodeName).toEqual("SPAN");
  expect(panelIcon?.nodeName).toEqual("I");
  expect(panelIcon?.classList).toContain("down");
});

test("test interaction user panel component with custom data", () => {
  const { queryByText } = render(RenderPanel);
  const panel = queryByText("testUser");
  expect(panel).toBeInTheDocument();
  fireEvent.click(panel?.parentElement!);
  expect(mockData.onPanelClick).toBeCalled();
  expect(mockData.onUpdatePanelState).toBeCalled();
});
