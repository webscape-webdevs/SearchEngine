import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  adsReducer
} from "./reducers/adsReducer";


const reducer = combineReducers({

  ads: adsReducer,

});



const middleware = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
