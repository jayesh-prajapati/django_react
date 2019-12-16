import { createStore, compose, applyMiddleware } from "redux";
import composeWithDevTools from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducres";

const initialState = {};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
