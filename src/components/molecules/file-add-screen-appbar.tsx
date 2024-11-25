import AppText from "@/src/components/atoms/app-text";
import CircleView from "@/src/components/atoms/circle-view";
import { ArrowLeftIcon, MoreVerticalIcon } from "@/src/components/atoms/icons";
import { Colors } from "@/src/utils/constans/colors";
import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Button, Menu } from "react-native-paper";

export default function FileAddScreenAppBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);
  return (
    <Appbar.Header style={{ backgroundColor: Colors.white }}>
      <Appbar.Action
        icon={() => (
          <View style={{ marginTop: 5 }}>
            <ArrowLeftIcon></ArrowLeftIcon>
          </View>
        )}
        onPress={router.back}
      />
      <Appbar.Content
        title="Dosya Bilgileri"
        titleStyle={styles.titleStyle}
        style={{ alignItems: "flex-start" }}
      />
      <View style={styles.activeChipStyle}>
        <AppText style={styles.activeChipTextStyle}>Açık</AppText>
      </View>
      <View style={styles.menuButtonStyle}>
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          contentStyle={{ backgroundColor: Colors.white }}
          anchor={
            <Button onPress={openMenu}>
              <CircleView color={Colors.textGray} height={24} width={24}>
                <MoreVerticalIcon></MoreVerticalIcon>
              </CircleView>
            </Button>
          }
        >
          <Menu.Item onPress={() => {}} title="Dosyayı Kapat" />
        </Menu>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "400",
    color: Colors.navyBlue,
    fontSize: 18,
  },
  activeChipStyle: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    height: 24,
    paddingHorizontal: 8,
    paddingLeft: 9,
    justifyContent: "center",
    marginRight: 30,
  },
  disableChipStyle: {
    height: 24,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.green,
    marginRight: 30,
  },
  activeChipTextStyle: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "500",
  },
  disableChipTextStyle: {
    color: Colors.green,
    fontSize: 12,
    fontWeight: "500",
  },
  menuButtonStyle: {
    right: -15,
    position: "absolute",
  },
});
