import React from "react";
import { Text, StyleSheet } from "react-native";

export default function AppText(props: any) {
  return (
    <Text onPress={props.onPress} style={[styles.defaultStyle, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
    fontFamily: "Axiforma-Regular",
  },
});
