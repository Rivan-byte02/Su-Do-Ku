export const generateBoard = (difficulty) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`
      );
      const data = await response.json();
      dispatch({
        type: "GENERATE_BOARD",
        payload: data,
      });
      dispatch({
        type: "RESET_BOARD",
        payload: "Good Luck",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const solveBoard = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://sugoku.herokuapp.com/solve", {
        method: "POST",
      });
      const data = await response.json();
      dispatch({
        type: "SOLVE_BOARD",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const inputValue = (board) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "INPUT_VALUE",
        payload: board,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
