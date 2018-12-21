import powerStateReducer from "./powerState";
import temperatureReducer from "./temperature";
import { combineReducers } from "redux";

const initialState = {};

const deviceList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DEVICE": {
      return {
        ...state,
        [action.payload.deviceId]: {
          deviceId: action.payload.deviceId,
          name: action.payload.name
        }
      };
    }
    case "REMOVE_DEVICES": {
      return {};
    }
    default:
      return state;
  }
};

// IMPORTANT the device reducers combines the deviceList with all dynamically injected reducers
const devicesReducer = asyncDeviceReducers =>
  combineReducers({
    deviceList,
    ...asyncDeviceReducers
  });

export const deviceReducer = combineReducers({
  powerState: powerStateReducer,
  temperature: temperatureReducer
});

export default devicesReducer;
