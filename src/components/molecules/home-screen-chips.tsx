import { View } from "react-native";
import AppChip from "../atoms/app-chip";
import { useState } from "react";

export default function HomeScreenChips() {
  const [index, setIndex] = useState(0);
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <AppChip
        title={"Tümü"}
        isSelected={index == 0}
        onPress={() => {
          setIndex(0);
        }}
      ></AppChip>
      <AppChip
        title={"Açık"}
        isSelected={index == 1}
        onPress={() => {
          setIndex(1);
        }}
      ></AppChip>
      <AppChip
        title={"Kapalı"}
        isSelected={index == 2}
        onPress={() => {
          setIndex(2);
        }}
      ></AppChip>
    </View>
  );
}
