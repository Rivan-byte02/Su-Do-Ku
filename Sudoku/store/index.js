import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { sudokuReducer } from "./reducer/sudokuReducer";
import { validateReducer } from "./reducer/validateReducer";

const rootReducer = combineReducers({
  sudoku: sudokuReducer,
  validate: validateReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
