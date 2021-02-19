import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import tailwind from "tailwind-rn";

export default function Home({ navigation }) {
  let [username, setUsername] = useState("");

  const handlerUsername = (text) => {
    setUsername(text);
  };

  return (
    <View style={[{ flex: 1 }, tailwind("bg-green-100")]}>
      <Text
        style={tailwind("text-4xl font-bold text-blue-300 mx-16 mt-10 mb-10")}
      >
        Sudoku Board
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri:
              "https://cdn6.f-cdn.com/contestentries/1495191/29595932/5ccbbc32d8b58_thumb900.jpg",
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={tailwind("text-lg")}>Hello {username}</Text>
        <Text style={tailwind("text-lg")}>Please enter your name here:</Text>
        <TextInput
          style={{
            height: 40,
            width: "60%",
            borderColor: "gray",
            borderWidth: 1,
            marginVertical: 20,
            textAlign: "center",
          }}
          onChangeText={(text) => handlerUsername(text)}
          value={username}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={[
              styles.button,
              tailwind("rounded-lg border-gray-300 bg-green-400"),
            ]}
            onPress={() =>
              navigation.navigate("GameBoard", { username, difficulty: "easy" })
            }
          >
            <Text style={tailwind("text-gray-400 text-xl")}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              tailwind("rounded-lg border-gray-300 bg-blue-400"),
            ]}
            onPress={() =>
              navigation.navigate("GameBoard", {
                username,
                difficulty: "normal",
              })
            }
          >
            <Text style={tailwind("text-green-400 text-xl")}>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              tailwind("rounded-lg border-gray-300 bg-red-600"),
            ]}
            onPress={() =>
              navigation.navigate("GameBoard", { username, difficulty: "hard" })
            }
          >
            <Text style={tailwind("text-gray-400 text-xl")}>Hard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 60,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40,
    marginHorizontal: 10,
    height: 30,
  },
});
