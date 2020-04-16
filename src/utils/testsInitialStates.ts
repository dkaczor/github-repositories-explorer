import { RootType } from "store/root";

export const initialState: RootType = {
  gitHubRepositoriesReducer: {
    status: "initial",
    githubRepositories: [],
    error: undefined,
  },
  gitHubUsersReducer: {
    status: "initial",
    userSearchingText: "",
    searchedUserName: "",
    githubUsers: [],
    error: undefined,
  },
};
