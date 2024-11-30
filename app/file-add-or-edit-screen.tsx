import FileAddScreenAppBar from "@/src/components/molecules/file-add-screen-appbar";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import FileAddTabs from "@/src/components/molecules/file-add-tabs";
import { Colors } from "@/src/utils/constans/colors";
import { TextInput } from "react-native-paper";
import AppText from "@/src/components/atoms/app-text";
import AppButton from "@/src/components/atoms/app-button";
import { ButtonTypes } from "@/src/utils/enums/button-types";

export default function FileAddOrEditScreen() {
  const [selectedFileType, setSelectedFileType] = useState("");
  function body() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            label={"Mendatory Input"}
            style={{
              backgroundColor: Colors.white,
            }}
            outlineColor={Colors.borderColor2}
            activeOutlineColor={Colors.primary}
            mode="outlined"
          ></TextInput>
          <TextInput
            label={"Text Input 1"}
            style={{
              backgroundColor: Colors.white,
            }}
            outlineColor={Colors.borderColor2}
            activeOutlineColor={Colors.primary}
            mode="outlined"
          ></TextInput>
          <TextInput
            label={"Numeric Input 1"}
            style={{
              backgroundColor: Colors.white,
            }}
            outlineColor={Colors.borderColor2}
            activeOutlineColor={Colors.primary}
            keyboardType="number-pad"
            mode="outlined"
          ></TextInput>
          <AppText style={styles.titleStyle}>Dosya Türü</AppText>
          <View
            style={{
              height: 30,
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 30,
            }}
          >
            <TouchableOpacity
              style={[
                styles.chipContainer,
                {
                  marginRight: 10,
                  backgroundColor:
                    selectedFileType === "X"
                      ? Colors.lightPurple
                      : Colors.chipColor,
                },
              ]}
              onPress={() => {
                setSelectedFileType("X");
              }}
            >
              <AppText>X</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chipContainer,
                {
                  marginRight: 10,
                  backgroundColor:
                    selectedFileType === "Y"
                      ? Colors.lightPurple
                      : Colors.chipColor,
                },
              ]}
              onPress={() => {
                setSelectedFileType("Y");
              }}
            >
              <AppText>Y</AppText>
            </TouchableOpacity>
          </View>
        </View>
        <AppButton
          type={ButtonTypes.primary}
          title={"Dosya Ekle"}
          borderRadius={16}
          onTap={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></AppButton>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <FileAddScreenAppBar />
      <FileAddTabs screen={body} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.borderColor2,
    padding: 16,
    margin: 16,
    borderRadius: 16,
  },
  titleStyle: {
    color: Colors.textGray,
    fontWeight: "400",
    fontSize: 16,
    marginTop: 12,
  },
  chipTitleStyle: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.green,
  },
  chipContainer: {
    backgroundColor: Colors.chipColor,
    flex: 1,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
