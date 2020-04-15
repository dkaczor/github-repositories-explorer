import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Segment, Input } from "semantic-ui-react";
import { setSearchingInput, destroyUserSlice } from "store/Users/Users.reducer";
import { fetchGitHubUsers } from "store/Users/Users.thunks";
import { fetchGitHubUserRepositories } from "store/Repositories/Repositories.thunks";
import {
  getGitHubUsers,
  getUserSearchingText,
  getLoadingStatusState,
  getSearchedUserName,
} from "store/Users/Users.selector";
import {
  getGitHubRepositories,
  getLoadingRepositoriesState,
} from "store/Repositories/Repositories.selector";
import { BrowserSearchingResults } from "components/BrowserSearchingResults";
import { ExpandedButton, AppLoader } from "./styled";
import { destroyRepositoriesSlice } from "store/Repositories/Repositories.reducer";

const GitHubRepositoriesExplorer: FC = () => {
  const [
    fetchedGitHubUsers,
    typedSearchingText,
    loadingUsersStatus,
    searchedUserName,
    userRepositories,
    isLoadingRepositories,
  ] = [
    useSelector(getGitHubUsers),
    useSelector(getUserSearchingText),
    useSelector(getLoadingStatusState),
    useSelector(getSearchedUserName),
    useSelector(getGitHubRepositories),
    useSelector(getLoadingRepositoriesState),
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
      dispatch(destroyUserSlice());
      dispatch(destroyRepositoriesSlice());
    };
  }, [dispatch]);

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
                placeholder="Enter username"
              />
              <ExpandedButton
                fluid
                onClick={() => {
                  fetchUsers();
                }}
                disabled={
                  !typedSearchingText.length || loadingUsersStatus.loading
                }
              >
                Search
              </ExpandedButton>
              {loadingUsersStatus.loading ? (
                <AppLoader active inline="centered" />
              ) : (
                <BrowserSearchingResults
                  searchedUserName={searchedUserName}
                  searchingResults={fetchedGitHubUsers}
                  userRepositories={userRepositories}
                  isLoadingRepositories={isLoadingRepositories}
                  isLoadedUsers={loadingUsersStatus.loaded}
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
