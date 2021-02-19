import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import tailwind from "tailwind-rn";

export default function Finish({ route, navigation }) {
  const { username } = route.params;

  return (
    <View style={[styles.container, tailwind("bg-green-100")]}>
      <Text style={tailwind("text-2xl font-bold text-blue-300 mb-5")}>
        {username}, Thank you for playing
      </Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://media.giphy.com/media/3ohhwJPSL00H2r6Rhe/giphy.gif",
        }}
      />
      <TouchableOpacity
        style={[
          styles.button,
          tailwind("rounded-lg border-gray-300 bg-blue-500"),
        ]}
        onPress={() => navigation.navigate("Home", { username })}
      >
        <Text style={tailwind("text-yellow-300 font-bold text-xl px-5")}>
          Go to Game
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 50,
    height: 30,
  },
});
