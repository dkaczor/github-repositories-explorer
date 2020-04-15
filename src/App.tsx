import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Button,
  Segment,
  Input,
  Loader,
} from "semantic-ui-react";
import styled from "@emotion/styled";
import {
  setSearchingInput,
  destroy,
} from "store/Repositories/Repositories.reducer";
import {
  fetchGitHubUsers,
  fetchGitHubUserRepositories,
} from "store/Repositories/Repositories.thunks";
import {
  getGitHubUsers,
  getUserSearchingText,
  getLoadingState,
  getSearchedUserName,
  getGitHubRepositories,
} from "store/Repositories/Repositories.selector";
import { BrowserSearchingResults } from "components/BrowserSearchingResults";

const GitHubRepositoriesExplorer: FC = () => {
  const [
    fetchedGitHubUsers,
    typedSearchingText,
    isLoading,
    searchedUserName,
    userRepositories,
  ] = [
    useSelector(getGitHubUsers),
    useSelector(getUserSearchingText),
    useSelector(getLoadingState),
    useSelector(getSearchedUserName),
    useSelector(getGitHubRepositories),
  ];

  const dispatch = useDispatch();

  const setSearchingInputText = (text: string) => {
    dispatch(setSearchingInput(text));
  };

  const fetchUsers = () => {
    dispatch(fetchGitHubUsers(typedSearchingText));
  };

  const fetchUsersFromRepository = (userName: string) => {
    dispatch(fetchGitHubUserRepositories(userName));
  };

  useEffect(() => {
    return () => {
      dispatch(destroy());
    };
  }, [dispatch]);

  const ExpandedButton = styled(Button)`
    &&& {
      background-color: rgb(44, 156, 219);
      border-radius: 0;
      color: #fff;
      margin-top: 25px;
      font-weight: 300;
      padding: 15px 0px;
    }
  `;

  return (
    <Container>
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column textAlign="center">
            <Segment>
              <Input
                fluid
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchingInputText(e.target.value)
                }
                className="inputClass"
              />
              <ExpandedButton
                fluid
                onClick={() => {
                  fetchUsers();
                }}
                disabled={!typedSearchingText.length || isLoading}
              >
                Search
              </ExpandedButton>
              {isLoading ? (
                <Loader active inline="centered" />
              ) : (
                <BrowserSearchingResults
                  searchedUserName={searchedUserName}
                  searchingResults={fetchedGitHubUsers}
                  userRepositories={userRepositories}
                  onPanelClick={fetchUsersFromRepository}
                />
              )}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default GitHubRepositoriesExplorer;
