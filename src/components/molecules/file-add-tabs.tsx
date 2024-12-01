import { Colors } from "@/src/utils/constans/colors";
import { View, Text } from "react-native";

import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function FileAddTabs(props: any) {
  const Tab = createMaterialTopTabNavigator();

  function ScreenB() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Screen One</Text>
      </View>
    );
  }
  function ScreenC() {
    return (
      <View
        style={{
          flex: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Screen Two</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: Colors.primary },
            tabBarLabelStyle: { fontSize: 14, fontWeight: "500" },
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.lightGray,
          }}
        >
          <Tab.Screen name="Bilgiler" component={() => props.screen} />
          <Tab.Screen name="Tab B" component={ScreenB} />
          <Tab.Screen name="Tab C" component={ScreenC} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
