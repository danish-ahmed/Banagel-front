import React, { Component, useMemo } from "react";
import { createStore } from "redux";
// create a simple reducer
const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};
// create a store creator
const makeStore = (initialState) => {
  return createStore(reducer, initialState);
};
export default makeStore;

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
