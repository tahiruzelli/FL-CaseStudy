import HomeScreenChips from "@/src/components/molecules/home-screen-chips";
import { Colors } from "@/src/utils/constans/colors";
import dimensions from "@/src/utils/helpers/dimension";
import { View, StyleSheet } from "react-native";

export default function SearchPage() {
  return (
    <View style={styles.body}>
      <HomeScreenChips></HomeScreenChips>
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
});
