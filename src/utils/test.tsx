import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const customRender = (
  ui: any,
  { initialState = {}, store = mockStore(initialState), ...options }
) => {
  const Wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

export { customRender as render };
