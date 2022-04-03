import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Books from "../Screens/Books";
import Topnav from "./TopNav";

const Stack = createStackNavigator();

export default function NCERTStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Topnav" component={Topnav} />
    </Stack.Navigator>
  );
}
