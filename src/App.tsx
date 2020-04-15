import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Segment } from "semantic-ui-react";
import { setSearchingInput, destroyUserSlice } from "store/Users/Users.reducer";
import { destroyRepositoriesSlice } from "store/Repositories/Repositories.reducer";
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
import { AppLoader } from "./styled";
import { BrowserSearchingResults } from "components/BrowserSearchingResults";
import { ExplorerHeader } from "components/ExplorerHeader";

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
              <ExplorerHeader
                isLoadingUsers={loadingUsersStatus.loading}
                typedSearchingText={typedSearchingText}
                onSearchButtonClick={fetchUsers}
                onTextInput={setSearchingInputText}
              />
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
