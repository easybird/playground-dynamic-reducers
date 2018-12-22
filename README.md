# Playground: Dynamic Reducers

With this POC, I wanted to test adding and removing reducers 'on the fly'.

We have a use case in which we want to add complex devices which all share the same functionality.
We should be able to do state management (reducing logic, saga effects) on a device level, without losing the overall overview.

A dynamic redux data structure seemed the way to go, with this system in place, we can easily add/remove devices which all start with a clean initial state that is not interfering with the existing state.

This is the core of the implementation:

```import powerStateReducer from "./powerState";
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
```
