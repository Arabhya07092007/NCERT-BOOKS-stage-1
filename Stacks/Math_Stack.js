import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Choose_book from "../Stacks/choose_book";
import Select_chapters from "../Stacks/Select_chapters";
import PDF_Screen from "../Stacks/pdf_screen";

const Stack = createStackNavigator();

export default function MathStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Choose_book" component={Choose_book} />
      <Stack.Screen name="Select_chapters" component={Select_chapters} />
      <Stack.Screen name="PDF_Screen" component={PDF_Screen} />
    </Stack.Navigator>
  );
}
