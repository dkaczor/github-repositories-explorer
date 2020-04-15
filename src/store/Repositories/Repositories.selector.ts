import { createSelector, Selector } from "reselect";
import { RootType, rootSelector } from "store/root";
import { StateTypes } from "store/Shared/Shared.types";
import { Repository } from "./Repositories.types";

export const getGitHubRepositories: Selector<
  RootType,
  Repository[] | undefined
> = createSelector(
  rootSelector,
  (root) => root.gitHubRepositoriesReducer.githubRepositories
);

export const getRepositoriesStateStatus: Selector<
  RootType,
  StateTypes
> = createSelector(rootSelector, (api) => api.gitHubRepositoriesReducer.status);
