import FileCard from "@/src/components/molecules/file-card";
import HomeScreenChips from "@/src/components/molecules/home-screen-chips";
import SearchInput from "@/src/components/molecules/search-input";
import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchPage() {
  return (
    <SafeAreaView style={styles.body}>
      <SearchInput></SearchInput>
      <HomeScreenChips></HomeScreenChips>
      <FileCard isActive={true}></FileCard>
      <FileCard isActive={false}></FileCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
