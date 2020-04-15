import { createSelector, Selector } from "reselect";
import { RootType } from "store/root";
import { LoadingInterface } from "store/Shared/Shared.types";

type LoadingOptions = Omit<LoadingInterface, "error">;

const rootSelector = (rootReducer: RootType) => rootReducer;

export const getLoadingStatusState: Selector<
  RootType,
  LoadingOptions
> = createSelector(rootSelector, (api) => ({
  loaded: api.gitHubUsersReducer.loaded,
  loading: api.gitHubUsersReducer.loading,
}));

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
  any[] | undefined
> = createSelector(rootSelector, (root) =>
  root.gitHubUsersReducer.githubUsers?.slice(0, 5)
);
