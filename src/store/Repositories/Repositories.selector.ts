import { createSelector, Selector } from "reselect";
import { RootType } from "../root";

const rootSelector = (rootReducer: RootType) => rootReducer;

export const getGitHubRepositories: Selector<
  RootType,
  any[] | undefined
> = createSelector(
  rootSelector,
  (root) => root.gitHubRepositoriesReducer.githubRepositories
);

export const getLoadingState: Selector<RootType, boolean> = createSelector(
  rootSelector,
  (api) => api.gitHubRepositoriesReducer.loading
);

export const getUserSearchingText: Selector<RootType, string> = createSelector(
  rootSelector,
  (api) => api.gitHubRepositoriesReducer.userSearchingText
);

export const getSearchedUserName: Selector<RootType, string> = createSelector(
  rootSelector,
  (api) => api.gitHubRepositoriesReducer.searchedUserName
);

export const getGitHubUsers: Selector<
  RootType,
  any[] | undefined
> = createSelector(rootSelector, (root) =>
  root.gitHubRepositoriesReducer.githubUsers?.slice(0, 5)
);
