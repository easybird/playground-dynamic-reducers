import powerStateReducer from "./powerState";
import temperatureReducer from "./temperature";
import { combineReducers } from "redux";

/*
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
*/

// IMPORTANT the device reducers combines the deviceList with all dynamically injected reducers
const devicesReducer = (asyncDeviceReducers = {}) =>
  Object.keys(asyncDeviceReducers).length > 0
    ? combineReducers({
        ...asyncDeviceReducers
      })
    : () => ({});

const initialState = {
  name: null,
  deviceId: null
};

const createDeviceDataReducer = (id, name) => (state, action) => {
  if (!state) {
    return { ...initialState, deviceId: id, name };
  }
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload.name
      };
    default:
      return state;
  }
};

export const createDeviceReducer = (id, name) =>
  combineReducers({
    deviceData: createDeviceDataReducer(id, name),
    powerState: powerStateReducer,
    temperature: temperatureReducer
  });

export default devicesReducer;
