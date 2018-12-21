const initialState = {
  reduxActions: []
};
const actions = (state = initialState, action) => {
  return {
    ...state,
    reduxActions: [...state.reduxActions, JSON.stringify(action)]
  };
};

export default actions;
