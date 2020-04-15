import { githubRepositoriesSlice } from "store/Repositories/Repositories.reducer";
import { gitHubUsersSlice } from "store/Users/Users.reducer";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  gitHubRepositoriesReducer: githubRepositoriesSlice.reducer,
  gitHubUsersReducer: gitHubUsersSlice.reducer,
});

export type RootType = ReturnType<typeof rootReducer>;

export const rootSelector = (rootReducer: RootType) => rootReducer;

export const appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
