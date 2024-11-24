import { Colors } from "@/src/utils/constans/colors";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AppChip(props: any) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={
          props.isSelected
            ? styles.selectedCardStyle
            : styles.unSelectedCardStyle
        }
      >
        <Text
          style={
            props.isSelected
              ? styles.selectedTitleStyle
              : styles.unSelectedTitleStyle
          }
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  selectedCardStyle: {
    backgroundColor: Colors.lightPurple,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 30,
  },
  unSelectedCardStyle: {
    backgroundColor: Colors.chipColor,
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 30,
  },
  selectedTitleStyle: {
    color: Colors.navyBlue,
    fontSize: 14,
    fontWeight: "500",
  },
  unSelectedTitleStyle: {
    color: Colors.lightGray,
    fontSize: 14,
    fontWeight: "500",
  },
});
