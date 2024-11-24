import { Colors } from "@/src/utils/constans/colors";
import { View, StyleSheet, Clipboard, TouchableOpacity } from "react-native";
import AppText from "../atoms/app-text";
import CopyButton from "../atoms/copy-button";
import { Snackbar } from "react-native-paper";
import { useState } from "react";
import CircleView from "../atoms/circle-view";
import { MoreVerticalIcon } from "../atoms/icons";
import dimensions from "@/src/utils/helpers/dimension";

export default function FileCard(props: any) {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  function onMenuButtonTapped() {
    console.log("on menu tapped");
  }
  return (
    <View
      style={
        props.isActive ? styles.selectedCardStyle : styles.unSelectedCardStyle
      }
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
        <AppText style={styles.titleStyle}>Mendatory Input</AppText>
        <CopyButton
          onTap={() => {
            onToggleSnackBar();
            Clipboard.setString("Mendatory Input");
          }}
        ></CopyButton>
        <View
          style={
            props.isActive ? styles.activeChipStyle : styles.closedChipStyle
          }
        >
          <AppText
            style={
              props.isActive
                ? styles.activeChipTextStyle
                : styles.closedChipTextStyle
            }
          >
            {props.isActive ? "Açık" : "Kapandı"}
          </AppText>
        </View>
        <TouchableOpacity
          style={styles.menuButtonStyle}
          onPress={onMenuButtonTapped}
        >
          <CircleView color={Colors.primary} height={24} width={24}>
            <MoreVerticalIcon></MoreVerticalIcon>
          </CircleView>
        </TouchableOpacity>
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
          {"Numeric input-1"} ⚬ {"Text input-1"}
        </AppText>
        <CopyButton
          onTap={() => {
            onToggleSnackBar();
            Clipboard.setString("Numeric input-1 ⚬ Text input-1");
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
    right: 0,
    position: "absolute",
  },
});
