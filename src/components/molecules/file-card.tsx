import { Colors } from "@/src/utils/constans/colors";
import { View, StyleSheet, Clipboard, TouchableOpacity } from "react-native";
import AppText from "../atoms/app-text";
import CopyButton from "../atoms/copy-button";
import { Button, Divider, Menu, Snackbar } from "react-native-paper";
import { useState } from "react";
import CircleView from "../atoms/circle-view";
import { MoreVerticalIcon } from "../atoms/icons";
import dimensions from "@/src/utils/helpers/dimension";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";

export default function FileCard(props: any) {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);
  const isActive = props.element.is_open;

  return (
    <View
      key={props.element.mendatory_input}
      style={isActive ? styles.selectedCardStyle : styles.unSelectedCardStyle}
    >
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Başarı ile kopyalandı
      </Snackbar>

      {/* FIRST LINE */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: dimensions()._width - 50,
        }}
      >
        <AppText style={styles.titleStyle}>
          {props.element.mendatory_input}
        </AppText>
        <CopyButton
          onTap={() => {
            onToggleSnackBar();
            Clipboard.setString(props.element.mendatory_input);
          }}
        ></CopyButton>
        <View
          style={isActive ? styles.activeChipStyle : styles.closedChipStyle}
        >
          <AppText
            style={
              isActive ? styles.activeChipTextStyle : styles.closedChipTextStyle
            }
          >
            {isActive ? "Açık" : "Kapandı"}
          </AppText>
        </View>

        <View style={styles.menuButtonStyle}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            contentStyle={{ backgroundColor: Colors.white }}
            anchor={
              <Button onPress={openMenu}>
                <CircleView color={Colors.primary} height={24} width={24}>
                  <MoreVerticalIcon></MoreVerticalIcon>
                </CircleView>
              </Button>
            }
          >
            <Menu.Item
              onPress={() => {
                closeMenu();
                const data = props.element;
                router.push({
                  pathname: PageRoutes.fileAddOrEditScreen,
                  params: {
                    file_type: data.file_type,
                    is_open: data.is_open,
                    mendatory_input: data.mendatory_input,
                    numeric_input: data.numeric_input,
                    text_input: data.text_input,
                  },
                });
              }}
              title="Dosya Detayına Git"
            />
            <Divider />
            <Menu.Item onPress={() => {}} title="Dosyayı Kapat" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Tab B'ye git" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Tab C'ye git" />
          </Menu>
        </View>
      </View>

      {/* SECOND LINE */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <AppText style={styles.descriptionStyle}>
          {props.element.numeric_input} ⚬ {props.element.text_input}
        </AppText>
        <CopyButton
          onTap={() => {
            onToggleSnackBar();
            Clipboard.setString(
              props.element.numeric_input + props.element.text_input
            );
          }}
        ></CopyButton>
      </View>

      {/* OTHERS */}
      <View style={styles.dashedLine} />
      <AppText style={styles.descriptionStyle}>
        {"Text input-2"} ⚬ {"Text input-3"}
      </AppText>
      <AppText style={styles.descriptionStyle}>
        {"Numeric input-2"} ⚬ {"Date input"}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedCardStyle: {
    backgroundColor: Colors.activeCardBackgroundColor,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  unSelectedCardStyle: {
    backgroundColor: Colors.chipColor,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.navyBlue,
    marginRight: 12,
  },
  activeChipStyle: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    height: 24,
    paddingHorizontal: 8,
    justifyContent: "center",
    marginLeft: 12,
  },
  closedChipStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderColor: Colors.green,
    borderRadius: 100,
    height: 24,
    paddingHorizontal: 8,
    justifyContent: "center",
    marginLeft: 12,
  },
  activeChipTextStyle: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.white,
  },
  closedChipTextStyle: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.green,
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.lightGray,
    marginRight: 12,
  },
  dashedLine: {
    height: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dashed",
    marginVertical: 8,
  },
  menuButtonStyle: {
    right: -19,
    position: "absolute",
  },
});
