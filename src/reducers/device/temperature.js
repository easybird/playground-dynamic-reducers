const initialState = {
  temperature: 0
};

export default function temperatureReducer(state = initialState, action) {
  switch (action.type) {
    case "TEMP_UP":
      return { ...state, temperature: state.temperature + 1 };
    case "TEMP_DOWN":
      return { ...state, temperature: state.temperature - 1 };
    default:
  }
  return state;
}
