import { createSelector, Selector } from "reselect";
import { RootType } from "store/root";
import { StateTypes } from "store/Shared/Shared.types";

const rootSelector = (rootReducer: RootType) => rootReducer;

export const getGitHubRepositories: Selector<
  RootType,
  any[] | undefined
> = createSelector(
  rootSelector,
  (root) => root.gitHubRepositoriesReducer.githubRepositories
);

export const getRepositoriesStateStatus: Selector<
  RootType,
  StateTypes
> = createSelector(rootSelector, (api) => api.gitHubRepositoriesReducer.status);
