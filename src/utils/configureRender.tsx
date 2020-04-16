import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const customRender = (
  ui: any,
  { initialState = {}, store = mockStore(initialState), ...options }
) => {
  const Wrapper = ({ children }: React.PropsWithChildren<{}>) => (
    <Provider store={store}>{children}</Provider>
  );
  return { component: render(ui, { wrapper: Wrapper, ...options }), store };
};

export { customRender as render };
