import FileAddScreenAppBar from "@/src/components/molecules/file-add-screen-appbar";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FileAddTabs from "@/src/components/molecules/file-add-tabs";
import { Colors } from "@/src/utils/constans/colors";
import { Snackbar, TextInput } from "react-native-paper";
import AppText from "@/src/components/atoms/app-text";
import AppButton from "@/src/components/atoms/app-button";
import { ButtonTypes } from "@/src/utils/enums/button-types";
import { useFileStore } from "@/src/store/file";
import { router, useLocalSearchParams } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";

export default function FileAddOrEditScreen(props: any) {
  const [selectedFileType, setSelectedFileType] = useState("");

  const { postFile, editFile } = useFileStore();

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [visible, setVisible] = useState(false);

  const params = useLocalSearchParams();

  var mendatory_input = "";
  let numeric_input = "";
  let text_input = "";
  const isAddScreen = params.mendatory_input === undefined;
  function BodyTest() {
    if (!isAddScreen) {
      mendatory_input = params.mendatory_input as string;
      numeric_input = params.numeric_input as string;
      text_input = params.text_input as string;
      setSelectedFileType(params.file_type as string);
    }
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            label={mendatory_input ?? "Mendatory Input"}
            style={{
              backgroundColor: Colors.white,
            }}
            onChangeText={(value) => {
              mendatory_input = value;
            }}
            outlineColor={Colors.borderColor2}
            activeOutlineColor={Colors.primary}
            mode="outlined"
          ></TextInput>
          <TextInput
            label={text_input ?? "Text Input 1"}
            style={{
              backgroundColor: Colors.white,
            }}
            onChangeText={(value) => {
              text_input = value;
            }}
            outlineColor={Colors.borderColor2}
            activeOutlineColor={Colors.primary}
            mode="outlined"
          ></TextInput>
          <TextInput
            label={numeric_input ?? "Numeric Input 1"}
            style={{
              backgroundColor: Colors.white,
            }}
            onChangeText={(value) => {
              numeric_input = value;
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
          title={isAddScreen ? "Dosya Ekle" : "Dosyayı Değiştir"}
          borderRadius={16}
          onTap={() => {
            console.log({
              mendatory_input: mendatory_input,
              numeric_input: numeric_input,
              text_input: text_input,
              file_type: selectedFileType,
            });

            if (
              selectedFileType != "" &&
              mendatory_input != "" &&
              numeric_input != "" &&
              text_input != ""
            ) {
              if (isAddScreen) {
                postFile({
                  mendatory_input: mendatory_input,
                  numeric_input: numeric_input,
                  text_input: text_input,
                  file_type: selectedFileType,
                });
              } else {
                editFile({
                  mendatory_input: mendatory_input,
                  numeric_input: numeric_input,
                  text_input: text_input,
                  file_type: selectedFileType,
                });
              }
              router.replace(PageRoutes.home);
            } else {
              onToggleSnackBar();
            }
          }}
        ></AppButton>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <FileAddScreenAppBar />
      <FileAddTabs screen={<BodyTest></BodyTest>} />
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Gerekli tüm alanları doldurunuz
      </Snackbar>
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
