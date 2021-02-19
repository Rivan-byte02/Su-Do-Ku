import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./view/Home";
import GameBoard from "./view/GameBoard";
import Finish from "./view/Fisnish";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="GameBoard" component={GameBoard} />
          <Stack.Screen name="Finish" component={Finish} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
