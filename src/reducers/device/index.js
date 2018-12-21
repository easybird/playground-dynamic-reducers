import powerStateReducer from "./powerState";
import temperatureReducer from "./temperature";
import createDeviceDataReducer from "./deviceData";
import { combineReducers } from "redux";

const emptyReducer = () => ({});

// IMPORTANT the device reducers combines all dynamically injected reducers
const dynamicDeviceReducer = (asyncDeviceReducers = {}) =>
  Object.keys(asyncDeviceReducers).length > 0
    ? combineReducers({
        ...asyncDeviceReducers
      })
    : emptyReducer;

export const createDeviceReducer = (id, name) =>
  combineReducers({
    deviceData: createDeviceDataReducer(id, name),
    powerState: powerStateReducer,
    temperature: temperatureReducer
  });

export default dynamicDeviceReducer;
