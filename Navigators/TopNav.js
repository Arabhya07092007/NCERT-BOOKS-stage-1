import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Maths from "../Subjects/Maths";
import Science from "../Subjects/Science";
import Social from "../Subjects/Social";
import Hindi from "../Subjects/Hindi";
import English from "../Subjects/English";
import Sanskrit from "../Subjects/Sanskrit";
import Physical from "../Subjects/Physical";

const Tab = createMaterialTopTabNavigator();

export default function Topnav() {
  return (
    <Tab.Navigator
      initialRouteName="Maths"
      screenOptions={{
        
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 13, fontWeight: "700" },
        tabBarStyle: { backgroundColor: "#8481D0" },
        tabBarItemStyle: { width: 90 },
        tabBarScrollEnabled: true,
        backBehavior: "firstRoute",
        // tabBarShowIcon:false
        // tabBarIcon: { color: "red" },
        // tabBarIndicatorStyle:{color:"red"}
      }}
    >
      <Tab.Screen
        name="Maths"
        component={Maths}
        options={{ tabBarLabel: "Maths" }}
      />
      <Tab.Screen
        name="Science"
        component={Science}
        options={{ tabBarLabel: "Science" }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{ tabBarLabel: "Social" }}
      />
      <Tab.Screen
        name="Hindi"
        component={Hindi}
        options={{ tabBarLabel: "Hindi" }}
      />
      <Tab.Screen
        name="English"
        component={English}
        options={{ tabBarLabel: "English" }}
      />
      <Tab.Screen
        name="Sanskrit"
        component={Sanskrit}
        options={{ tabBarLabel: "Sanskrit" }}
      />
      <Tab.Screen
        name="Physical"
        component={Physical}
        options={{ tabBarLabel: "Physical" }}
      />
    </Tab.Navigator>
  );
}
