import React, { FC } from "react";
import { Segment, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";

interface RepositoryPanelsProps {
  userRepositories: any[] | undefined;
}

const PanelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpandedPanelSegment = styled(Segment)`
  &&& {
    align-self: flex-end;
    width: 90%;
    background-color: rgb(224, 224, 224);
    border-radius: 0;
    border: none;
    box-shadow: initial;
    padding-bottom: 50px;
    animation: fadeInAnimation 1s;

    @keyframes fadeInAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const PanelFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;

  &&& i {
    margin-left: 5px;
  }

  &&& span:first-of-type {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const RepositoryPanels: FC<RepositoryPanelsProps> = ({
  userRepositories,
}) => {
  const RepositoriesPanels = userRepositories?.map((repository) => (
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
  ));
  return <PanelsWrapper>{RepositoriesPanels}</PanelsWrapper>;
};
