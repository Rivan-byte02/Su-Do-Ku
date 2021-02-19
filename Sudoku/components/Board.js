import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tailwind from "tailwind-rn";
import { generateBoard, inputValue } from "../store/action/sudokuAction";
const windowWidth = Dimensions.get("window").width;

export default function Board({ difficulty }) {
  let { sudoku, newSudoku } = useSelector((state) => state.sudoku);
  let { status } = useSelector((state) => state.validate);
  let [localBoard, setLocalBoard] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(difficulty);
    dispatch(generateBoard(difficulty));
  }, []);

  useEffect(() => {
    setLocalBoard(sudoku);
  }, [sudoku]);

  useEffect(() => {
    setLocalBoard(newSudoku);
  }, [newSudoku]);

  useEffect(() => {
    alert(status);
  }, [status]);

  const handlerInput = (value, iRow, iCol) => {
    let newBoard = JSON.parse(JSON.stringify(localBoard));
    newBoard[iRow][iCol] = +value;
    dispatch(inputValue(newBoard));
  };

  return (
    <View
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={[styles.container, { marginVertical: 90 }]}
    >
      {localBoard.map((row, iRow) => {
        return (
          <View
            style={{
              flexDirection: "row",
            }}
            key={iRow}
          >
            {row.map((col, iCol) => {
              if (col === 0) col = "";
              return (
                <TextInput
                  key={iCol}
                  style={[
                    styles.box,
                    col !== "" &&
                      col === sudoku[iRow][iCol] &&
                      tailwind("font-bold text-green-700"),
                    status === "solved" && tailwind("bg-green-400"),
                    ((iRow < 3 && iCol < 3) ||
                      (iRow < 3 && iCol > 5) ||
                      (iRow > 5 && iCol < 3) ||
                      (iRow > 5 && iCol > 5) ||
                      (iRow >= 3 && iRow <= 5 && iCol >= 3 && iCol <= 5)) &&
                      tailwind("bg-blue-300"),
                  ]}
                  textAlign="center"
                  keyboardType="numeric"
                  maxLength={1}
                  editable={col === sudoku[iRow][iCol] ? false : true}
                  onChangeText={(value) => handlerInput(value, iRow, iCol)}
                  defaultValue={`${col}`}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderWidth: 1,
    width: (windowWidth - 40) / 9,
    height: (windowWidth - 40) / 9,
    borderColor: "wheat",
    backgroundColor: "rgba(252, 211, 77, 0.4)",
    borderRadius: 10,
    color: "gray",
  },
  solve: {
    backgroundColor: "lightgreen",
  },
  initBox: {
    backgroundColor: "gray",
  },
  button: {
    marginHorizontal: windowWidth / 3 + 15,
    height: 30,
    width: 100,
  },
});
