import React, { FC, useState, Fragment, useMemo } from "react";
import { RepositoryPanels } from "components/RepositoryPanels";
import { ExpandedParagraph } from "components/styled";
import { StateTypes } from "store/Shared/Shared.types";
import { UserPanel } from "./UserPanel";
import { Repository } from "store/Repositories/Repositories.types";
import { User } from "store/Users/Users.types";

export interface BrowserSearchingResultsProps {
  searchingResults: User[] | undefined;
  userRepositories: Repository[] | undefined;
  searchedUserName: string;
  repositoriesStatus: StateTypes;
  usersStatus: StateTypes;
  onPanelClick: (userName: string) => void;
}

export const BrowserSearchingResults: FC<BrowserSearchingResultsProps> = ({
  searchedUserName,
  searchingResults,
  onPanelClick,
  userRepositories,
  usersStatus,
  repositoriesStatus,
}) => {
  const [panelState, updatePanelState] = useState<number>(0);
  const gitHubUserPanels = useMemo(
    () =>
      searchingResults?.map((user: User) => (
        <Fragment key={user.id}>
          <UserPanel
            panelState={panelState}
            panelLogin={user.login}
            panelId={user.id}
            repositoriesStatus={repositoriesStatus}
            onUpdatePanelState={updatePanelState}
            onPanelClick={onPanelClick}
          />
          {panelState === user.id && userRepositories?.length ? (
            <RepositoryPanels userRepositories={userRepositories} />
          ) : (
            ""
          )}
        </Fragment>
      )),
    [
      searchingResults,
      repositoriesStatus,
      panelState,
      onPanelClick,
      userRepositories,
    ]
  );
  return (
    <>
      <ExpandedParagraph>
        {searchingResults?.length && !panelState ? (
          <>
            Showing users for <span>{searchedUserName}</span>
          </>
        ) : (
          ""
        )}
        {!searchingResults?.length && usersStatus === "loaded" && (
          <>No results</>
        )}
      </ExpandedParagraph>
      {gitHubUserPanels}
    </>
  );
};
