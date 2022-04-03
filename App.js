import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyDrawer from "./Navigators/DrawerNavigator";
import Select_chapters from "./Stacks/Select_chapters";
import MathStack from "./Stacks/Math_Stack";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
  // return <MathStack />;
}
