import FileCard from "@/src/components/molecules/file-card";
import HomeScreenChips from "@/src/components/molecules/home-screen-chips";
import SearchInput from "@/src/components/molecules/search-input";
import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FAB } from "react-native-paper";
import dimensions from "@/src/utils/helpers/dimension";

export default function SearchPage() {
  return (
    <SafeAreaView style={styles.body}>
      <SearchInput></SearchInput>
      <HomeScreenChips></HomeScreenChips>
      <FileCard isActive={true}></FileCard>
      <FileCard isActive={false}></FileCard>
      <FAB
        icon="plus"
        color="white"
        label="Dosya Ekle"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.background,
    height: dimensions()._height * 0.9,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  fab: {
    position: "absolute",
    backgroundColor: Colors.primary,
    borderRadius: 100,
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
