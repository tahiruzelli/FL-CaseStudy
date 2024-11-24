import { View, StyleSheet } from "react-native";
import { SearchIcon } from "../atoms/icons";
import { TextInput } from "react-native-paper";
import { Colors } from "@/src/utils/constans/colors";
import dimensions from "@/src/utils/helpers/dimension";
import { useState } from "react";

export default function SearchInput() {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputContainer}>
      <View style={styles.searchIconStyle}>
        <SearchIcon></SearchIcon>
      </View>
      <TextInput
        style={styles.inputStyle}
        value={text}
        placeholder="Dosya Ara"
        placeholderTextColor={Colors.lightGray}
        selectionColor={Colors.textGray}
        activeUnderlineColor="white"
        underlineColor="transparent"
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 28,
    flexDirection: "row",
    backgroundColor: Colors.white,
  },
  inputStyle: {
    backgroundColor: "transparent",
    borderWidth: 0,
    width: dimensions()._width - 80,
  },
  searchIconStyle: {
    height: 40,
    width: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
