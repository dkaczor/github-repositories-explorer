import React, { FC, useMemo } from "react";
import { Icon } from "semantic-ui-react";
import {
  ExpandedPanelSegment,
  PanelFirstRow,
  PanelsWrapper,
} from "components/styled";
import { Repository } from "store/Repositories/Repositories.types";

interface RepositoryPanelsProps {
  userRepositories: Repository[] | undefined;
}

export const RepositoryPanels: FC<RepositoryPanelsProps> = ({
  userRepositories,
}) => {
  const RepositoriesPanels = useMemo(
    () =>
      userRepositories?.map((repository) => (
        <ExpandedPanelSegment key={repository.id} textAlign="left">
          <PanelFirstRow>
            <span>{repository.name}</span>
            <span>
              {repository.forks}
              <Icon name="star" />
            </span>
          </PanelFirstRow>
          <p>{repository.description}</p>
        </ExpandedPanelSegment>
      )),
    [userRepositories]
  );
  return <PanelsWrapper>{RepositoriesPanels}</PanelsWrapper>;
};
