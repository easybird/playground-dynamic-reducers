const initialState = {
  on: false
};

export default function powerStateReducer(state = initialState, action) {
  switch (action.type) {
    case "SWITCH_ON_OFF":
      return {
        ...state,
        on: !state.on
      };
    default:
      return state;
  }
}
