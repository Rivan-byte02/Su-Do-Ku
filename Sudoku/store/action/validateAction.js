export const showStatus = (newSudoku) => {
  return (dispatch, getState) => {
    try {
      const encodeBoard = (board) =>
        board.reduce(
          (result, row, i) =>
            result +
            `%5B${encodeURIComponent(row)}%5D${
              i === board.length - 1 ? "" : "%2C"
            }`,
          ""
        );

      const encodeParams = (params) =>
        Object.keys(params)
          .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
          .join("&");

      const data = {
        board: newSudoku,
      };

      fetch("https://sugoku.herokuapp.com/validate", {
        method: "POST",
        body: encodeParams(data),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => response.json())
        .then((response) => {
          dispatch({
            type: "SHOW_STATUS",
            payload: response,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetStatus = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: "RESET_STATUS",
        payload: "Still unsolved",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const solve = (newSudoku) => {
  return (dispatch) => {
    try {
      const encodeBoard = (board) =>
        board.reduce(
          (result, row, i) =>
            result +
            `%5B${encodeURIComponent(row)}%5D${
              i === board.length - 1 ? "" : "%2C"
            }`,
          ""
        );

      const encodeParams = (params) =>
        Object.keys(params)
          .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
          .join("&");

      const data = {
        board: newSudoku,
      };

      fetch("https://sugoku.herokuapp.com/solve", {
        method: "POST",
        body: encodeParams(data),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then((response) => response.json())
        .then((response) => {
          dispatch({
            type: "QUICK_SOLVE",
            payload: response.solution,
          });
          dispatch({
            type: "SOLVE_STATUS",
            payload: response.status,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const timeUp = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: "TIME_UP",
        payload: "solved",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
