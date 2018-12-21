import { createStore, combineReducers } from "redux";
import dynamicDeviceReducer, { createDeviceReducer } from "./device";
import installer from "./installer";
import actions from "./actions";

// IMPORTANT we inject the dynamic device inside the devices reducer
const reducers = asyncDeviceReducers =>
  combineReducers({
    actions,
    devices: dynamicDeviceReducer(asyncDeviceReducers),
    installer
  });

const rootReducers = asyncDeviceReducers => (state, action) => {
  return reducers(asyncDeviceReducers)(state, action);
};

const initializeStore = () => {
  const store = createStore(rootReducers());

  store.asyncDeviceReducers = {};

  store.injectReducer = (key, reducer) => {
    store.asyncDeviceReducers[key] = reducer;
    // IMPORTANT here we inject the merged reducers into the existing store
    store.replaceReducer(rootReducers(store.asyncDeviceReducers));
  };

  store.removeReducer = key => {
    console.log("removeReducer");
    delete store.asyncDeviceReducers[key];
    store.replaceReducer(rootReducers(store.asyncDeviceReducers));
  };
  return store;
};

const theOneAndOnlyStore = initializeStore();

export const addDeviceReducer = (deviceId, deviceName) => {
  console.log("addReducer", deviceId);
  theOneAndOnlyStore.injectReducer(deviceId, (state, action) =>
    createDeviceReducer(deviceId, deviceName)(
      state,
      // IMPORTANT this makes sure not all device get updated, only the impacted reducer receives the action
      action.payload && action.payload.deviceId === deviceId
        ? action
        : { type: "NOT_FOR_YOU", payload: action.payload }
    )
  );
};

export const removeDeviceReducers = () => {
  Object.keys(theOneAndOnlyStore.getState().devices).forEach(deviceId =>
    theOneAndOnlyStore.removeReducer(deviceId)
  );
};

export default theOneAndOnlyStore;
