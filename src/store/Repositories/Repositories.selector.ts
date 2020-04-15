import { createSelector, Selector } from "reselect";
import { RootType } from "store/root";

const rootSelector = (rootReducer: RootType) => rootReducer;

export const getGitHubRepositories: Selector<
  RootType,
  any[] | undefined
> = createSelector(
  rootSelector,
  (root) => root.gitHubRepositoriesReducer.githubRepositories
);

export const getLoadingRepositoriesState: Selector<
  RootType,
  boolean
> = createSelector(
  rootSelector,
  (api) => api.gitHubRepositoriesReducer.loading
);
