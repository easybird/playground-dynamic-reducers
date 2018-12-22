import powerStateReducer from "./powerState";
import temperatureReducer from "./temperature";
import deviceDataReducer from "./deviceData";
import { combineReducers } from "redux";

const device = combineReducers({
  deviceData: deviceDataReducer,
  powerState: powerStateReducer,
  temperature: temperatureReducer
});

const devices = (state = {}, action) => {
  switch (action.type) {
    case "REMOVE_DEVICES":
      return {};
    default:
      break;
  }

  if (!action.payload || !action.payload.deviceId) {
    return state;
  }
  return {
    ...state,
    [action.payload.deviceId]: device(state[action.payload.deviceId], action)
  };
};

export default devices;
