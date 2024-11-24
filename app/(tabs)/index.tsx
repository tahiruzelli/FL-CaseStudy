import { SearchIcon } from "@/src/components/atoms/icons";
import { Colors } from "@/src/utils/constans/colors";
import dimensions from "@/src/utils/helpers/dimension";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function SearchPage() {
  const [text, setText] = useState("");
  return (
    <View style={styles.body}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    paddingHorizontal: 16,
    height: dimensions()._height,
  },
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
