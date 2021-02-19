import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import Board from "../components/Board";
import tailwind from "tailwind-rn";
import { useDispatch, useSelector } from "react-redux";
import { showStatus, solve } from "../store/action/validateAction";
import CountDown from "react-native-countdown-component";
const windowWidth = Dimensions.get("window").width;

export default function GameBoard({ route, navigation }) {
  let { status } = useSelector((state) => state.validate);
  let { newSudoku } = useSelector((state) => state.sudoku);
  const { username } = route.params;
  const { difficulty } = route.params;
  const dispatch = useDispatch();

  const handlerValidate = (e) => {
    e.preventDefault();
    dispatch(showStatus(newSudoku));
  };

  const handlerSolve = (e) => {
    e.preventDefault();
    dispatch(solve(newSudoku));
  };

  return (
    <KeyboardAvoidingView style={[styles.container, tailwind("bg-green-100")]}>
      <View style={styles.container}>
        <Text style={tailwind("text-xl font-bold text-blue-300 mx-4 my-5")}>
          Player: {JSON.stringify(username)}
        </Text>
        <CountDown
          until={difficulty === "easy" ? 60 * 15 + 30 : 60 * 10}
          size={20}
          onFinish={() => navigation.navigate("Finish", { username })}
          digitStyle={{ backgroundColor: "#FFF" }}
          digitTxtStyle={{ color: "#1CC625" }}
          timeToShow={["M", "S"]}
          timeLabels={{ m: "Minute", s: "Second" }}
        />
      </View>
      <Board difficulty={difficulty} />
      {status !== "solved" && (
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={[
              styles.button,
              tailwind("rounded-lg border-gray-300 bg-green-600"),
            ]}
            onPress={(e) => handlerValidate(e)}
          >
            <Text style={tailwind("text-yellow-300 font-bold text-xl")}>
              Validate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              tailwind("rounded-lg border-gray-300 bg-green-600"),
            ]}
            onPress={(e) => handlerSolve(e)}
          >
            <Text style={tailwind("text-yellow-300 font-bold text-xl")}>
              Solve
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {status === "solved" && (
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={[
              styles.button,
              tailwind("rounded-lg border-gray-300 bg-green-600"),
            ]}
            onPress={() => navigation.navigate("Finish", { username })}
          >
            <Text style={tailwind("text-yellow-300 font-bold text-xl")}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginHorizontal: windowWidth / 12,
    height: windowWidth / 10,
    width: windowWidth / 3,
  },
});
