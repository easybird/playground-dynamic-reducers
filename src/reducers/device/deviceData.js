const initialState = {
  name: null,
  deviceId: null
};

const deviceDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DEVICE":
      return {
        ...state,
        name: action.payload.name,
        deviceId: action.payload.deviceId
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload.name
      };
    default:
      return state;
  }
};

export default deviceDataReducer;
