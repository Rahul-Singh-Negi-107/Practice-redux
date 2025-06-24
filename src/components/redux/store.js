import { createStore } from "redux";

const initialState = { count: 0, name: "" };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    case "UPDATE_NAME":
      return { name: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer);
