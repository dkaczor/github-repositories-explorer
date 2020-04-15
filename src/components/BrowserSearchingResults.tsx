import React, { FC, useState, Fragment } from "react";
import { Segment, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import { RepositoryPanels } from "components/RepositoryPanel";

interface BrowserSearchingResultsProps {
  searchingResults: any[] | undefined;
  userRepositories: any[] | undefined;
  searchedUserName: string;
  onPanelClick: (userName: string) => void;
}

const ExpandedSegment = styled(Segment)`
  &&& {
    background-color: rgb(242, 242, 242);
    border-radius: 0;
    margin-top: 25px;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: 3s;
  }

  &&&:hover {
    background-color: rgb(242, 242, 222);
  }
`;

const ExpandedParagraph = styled.p`
  text-align: start;
`;

export const BrowserSearchingResults: FC<BrowserSearchingResultsProps> = ({
  searchedUserName,
  searchingResults,
  onPanelClick,
  userRepositories,
}) => {
  const [panelState, updatePanelState] = useState<number>(0);
  const gitHubUserPanels = searchingResults?.map((item) => (
    <Fragment key={item.id}>
      <ExpandedSegment
        onClick={() => {
          if (panelState !== item.id) {
            updatePanelState(item.id);
            onPanelClick(item.login);
          } else {
            updatePanelState(0);
          }
        }}
      >
        <span>{item.login}</span>
        {panelState !== item.id && <Icon name="chevron down" />}
        {panelState === item.id && <Icon name="chevron up" />}
      </ExpandedSegment>
      {panelState === item.id && !!userRepositories?.length && (
        <RepositoryPanels userRepositories={userRepositories} />
      )}
    </Fragment>
  ));
  return (
    <>
      {!!searchingResults?.length && !panelState && (
        <ExpandedParagraph>
          Showing users for : {searchedUserName}{" "}
        </ExpandedParagraph>
      )}
      {gitHubUserPanels}
    </>
  );
};
