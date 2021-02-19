const initialState = {
  status: "Welcome",
};

export const validateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_BOARD":
      return { ...state, status: action.payload };
    case "RESET_STATUS":
      return { ...state, status: action.payload };
    case "SHOW_STATUS":
      return { ...state, status: action.payload.status };
    case "SOLVE_STATUS":
      return { ...state, status: action.payload };
    case "TIME_UP":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
