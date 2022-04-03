import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Books from "../Screens/Books";
import Solutions from "../Screens/Solutions";
import Notes from "../Screens/Notes";
import Paper from "../Screens/Papers";
import CustomSidebarMenu from "../Screens/CustomSidebarMenu";
import { Icon } from "react-native-elements";
import { Image } from "react-native";

import NCERTStack from "./NCERTStack";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        drawerItemStyle: { marginLeft: 15, marginRight: 15 },
        drawerLabelStyle: { fontWeight: "bold" },
        drawerActiveTintColor: "#8481D0",
        headerStyle: { backgroundColor: "#8481D0" },
        headerTitleStyle: { color: "white" },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="NCERT Books"
        component={NCERTStack}
        options={{
          title: "NCERT Books",
          drawerIcon: ({ tintColor }) => (
            <Icon type="feather" name="book" size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="NCERT Solutions"
        component={Solutions}
        options={{
          title: "NCERT Solutions",
          drawerIcon: ({ tintColor }) => (
            <Icon type="ionicon" name="bulb-outline" size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="NCERT Notes"
        component={Notes}
        options={{
          title: "NCERT Notes",
          drawerIcon: ({ tintColor }) => (
            <Icon type="feather" name="edit-2" size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="CBSE Sample Paper"
        component={Paper}
        options={{
          title: "CBSE Sample Paper",
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require("../assests/notes.jpg")}
              style={{ width: 27, height: 27, marginLeft: -6 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
