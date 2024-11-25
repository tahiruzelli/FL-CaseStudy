import { PersonIcon, SearchIcon } from "@/src/components/atoms/icons";
import { Colors } from "@/src/utils/constans/colors";
import { Tabs } from "expo-router";
import { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function TabLayout() {
  const [selectedTab, setSelectedTab] = useState("index");
  function isTabSelected(type: string) {
    return selectedTab === type;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.navyBlue,
        tabBarInactiveTintColor: Colors.textGray,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      }}
      screenListeners={{
        // Monitor tab press and if 'test' tab is pressed, toggle value in zustand to trigger refetching of data from server
        tabPress: (e) => {
          setSelectedTab(e.target!.split("-")[0]);
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Arama",
          tabBarIcon: ({ color }) => (
            <View
              style={
                isTabSelected("index")
                  ? styles.selectedIcon
                  : styles.unSelectedIcon
              }
            >
              <SearchIcon
                color={
                  isTabSelected("index") ? Colors.navyBlue : Colors.textGray
                }
              ></SearchIcon>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profilim",

          tabBarIcon: ({ color }) => (
            <View
              style={
                isTabSelected("profile")
                  ? styles.selectedIcon
                  : styles.unSelectedIcon
              }
            >
              <PersonIcon
                color={
                  isTabSelected("profile") ? Colors.navyBlue : Colors.textGray
                }
              ></PersonIcon>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  selectedIcon: {
    backgroundColor: Colors.lightPurple,
    borderRadius: 16,
    height: 32,
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  unSelectedIcon: {},
});
