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
  getStatusUserState,
  getSearchedUserName,
} from "store/Users/Users.selector";
import {
  getGitHubRepositories,
  getRepositoriesStateStatus,
} from "store/Repositories/Repositories.selector";
import { AppLoader } from "components/styled";
import { BrowserSearchingResults } from "./BrowserSearchingResults";
import { ExplorerHeader } from "./ExplorerHeader";

const GitHubRepositoriesExplorer: FC = () => {
  const [
    fetchedGitHubUsers,
    typedSearchingText,
    userStatusState,
    searchedUserName,
    userRepositories,
    repositoriesStatusState,
  ] = [
    useSelector(getGitHubUsers),
    useSelector(getUserSearchingText),
    useSelector(getStatusUserState),
    useSelector(getSearchedUserName),
    useSelector(getGitHubRepositories),
    useSelector(getRepositoriesStateStatus),
  ];

  const dispatch = useDispatch();

  const setSearchingInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchingInput(e.target.value));
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
                typedSearchingText={typedSearchingText}
                onSearchButtonClick={fetchUsers}
                onTextInput={setSearchingInputText}
              />
              {userStatusState === "loading" ? (
                <AppLoader active inline="centered" />
              ) : (
                <BrowserSearchingResults
                  searchedUserName={searchedUserName}
                  searchingResults={fetchedGitHubUsers}
                  userRepositories={userRepositories}
                  repositoriesStatus={repositoriesStatusState}
                  usersStatus={userStatusState}
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
