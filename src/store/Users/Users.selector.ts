import { createSelector, Selector } from "reselect";
import { RootType, rootSelector } from "store/root";
import { StateTypes } from "store/Shared/Shared.types";
import { User } from "./Users.types";

export const getStatusUserState: Selector<
  RootType,
  StateTypes
> = createSelector(rootSelector, (api) => api.gitHubUsersReducer.status);

export const getUserSearchingText: Selector<RootType, string> = createSelector(
  rootSelector,
  (api) => api.gitHubUsersReducer.userSearchingText
);

export const getSearchedUserName: Selector<RootType, string> = createSelector(
  rootSelector,
  (api) => api.gitHubUsersReducer.searchedUserName
);

export const getGitHubUsers: Selector<
  RootType,
  User[] | undefined
> = createSelector(rootSelector, (root) =>
  root.gitHubUsersReducer.githubUsers?.slice(0, 5)
);
