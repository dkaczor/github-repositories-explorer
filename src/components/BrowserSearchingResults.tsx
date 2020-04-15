import React, { FC, useState, Fragment, useMemo } from "react";
import { Icon } from "semantic-ui-react";
import { RepositoryPanels } from "components/RepositoryPanel";
import { ExpandedSegment, ExpandedParagraph } from "styled";

interface BrowserSearchingResultsProps {
  searchingResults: any[] | undefined;
  userRepositories: any[] | undefined;
  searchedUserName: string;
  isLoadingRepositories: boolean;
  isLoadedUsers: boolean;
  onPanelClick: (userName: string) => void;
}

export const BrowserSearchingResults: FC<BrowserSearchingResultsProps> = ({
  searchedUserName,
  searchingResults,
  onPanelClick,
  userRepositories,
  isLoadedUsers,
  isLoadingRepositories,
}) => {
  const [panelState, updatePanelState] = useState<number>(0);

  const gitHubUserPanels = useMemo(
    () =>
      searchingResults?.map((item) => (
        <Fragment key={item.id}>
          <ExpandedSegment
            disabled={isLoadingRepositories}
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
            <Icon
              name={panelState !== item.id ? "chevron down" : "chevron up"}
            />
          </ExpandedSegment>
          {panelState === item.id && !!userRepositories?.length && (
            <RepositoryPanels userRepositories={userRepositories} />
          )}
        </Fragment>
      )),
    [
      searchingResults,
      isLoadingRepositories,
      panelState,
      onPanelClick,
      userRepositories,
    ]
  );
  return (
    <>
      <ExpandedParagraph>
        {!!searchingResults?.length && !panelState && (
          <>
            Showing users for: <span>{searchedUserName}</span>
          </>
        )}
        {!searchingResults?.length && isLoadedUsers && (
          <>There is no results of searching.</>
        )}
      </ExpandedParagraph>
      {gitHubUserPanels}
    </>
  );
};
