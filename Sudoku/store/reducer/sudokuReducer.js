const initialState = {
  sudoku: [],
  newSudoku: [],
};

export const sudokuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GENERATE_BOARD":
      return {
        ...state,
        sudoku: JSON.parse(JSON.stringify(action.payload.board)),
        newSudoku: JSON.parse(JSON.stringify(action.payload.board)),
      };
    case "INPUT_VALUE":
      return { ...state, newSudoku: action.payload };
    case "QUICK_SOLVE":
      return { ...state, sudoku: action.payload };
    default:
      return state;
  }
};
