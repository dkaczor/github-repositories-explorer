import { githubRepositoriesSlice } from "store/Repositories/Repositories.reducer";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  gitHubRepositoriesReducer: githubRepositoriesSlice.reducer,
});

export interface RootType extends ReturnType<typeof rootReducer> {}

export const appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
