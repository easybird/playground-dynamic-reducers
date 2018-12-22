import { createStore, combineReducers } from "redux";
import devices from "./device";
import installer from "./installer";
import actions from "./actions";

const reducers = combineReducers({
  actions,
  devices,
  installer
});

const store = createStore(reducers);

export default store;
