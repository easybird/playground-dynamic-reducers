const initialState = {
  name: null,
  deviceId: null
};

const createDeviceDataReducer = (id, name) =>
  function deviceDataReducer(state, action) {
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

export default createDeviceDataReducer;
