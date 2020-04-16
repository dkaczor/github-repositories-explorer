import React, { FC } from "react";
import { Icon } from "semantic-ui-react";
import { ExpandedSegment } from "components/styled";
import { StateTypes } from "store/Shared/Shared.types";

export interface BrowserSearchingPanelProps {
  repositoriesStatus: StateTypes;
  panelId: number;
  panelLogin: string;
  panelState: number;
  onUpdatePanelState: React.Dispatch<React.SetStateAction<number>>;
  onPanelClick: (userName: string) => void;
}

export const UserPanel: FC<BrowserSearchingPanelProps> = ({
  repositoriesStatus,
  panelId,
  panelLogin,
  panelState,
  onUpdatePanelState,
  onPanelClick,
}) => {
  const isPanelOpen = panelState !== panelId;
  const handleClick = (): void => {
    if (isPanelOpen) {
      onUpdatePanelState(panelId);
      onPanelClick(panelLogin);
    } else {
      onUpdatePanelState(0);
    }
  };
  return (
    <ExpandedSegment
      disabled={repositoriesStatus === "loading"}
      onClick={repositoriesStatus !== "loading" ? handleClick : undefined}
    >
      <span>{panelLogin}</span>
      <Icon name={isPanelOpen ? "chevron down" : "chevron up"} />
    </ExpandedSegment>
  );
};
