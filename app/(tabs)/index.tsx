import FileCard from "@/src/components/molecules/file-card";
import HomeScreenChips from "@/src/components/molecules/home-screen-chips";
import SearchInput from "@/src/components/molecules/search-input";
import { Colors } from "@/src/utils/constans/colors";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FAB } from "react-native-paper";
import dimensions from "@/src/utils/helpers/dimension";
import { PageRoutes } from "@/src/utils/constans/page-routes";
import { router } from "expo-router";
import { useFileStore } from "@/src/store/file";
import { useEffect } from "react";

export default function SearchPage() {
  const { files = [], loading, error, fetchFiles } = useFileStore();
  useEffect(() => {
    console.log("fetch");
    fetchFiles();
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <SafeAreaView style={styles.body}>
      <SearchInput></SearchInput>
      <HomeScreenChips></HomeScreenChips>

      <ScrollView>
        {files.length == 0 ? (
          <View></View>
        ) : (
          files.map((element: string, index: number) => (
            <FileCard key={index} element={element}></FileCard>
          ))
        )}
      </ScrollView>

      <FAB
        icon="plus"
        color="white"
        label="Dosya Ekle"
        style={styles.fab}
        onPress={() => router.push(PageRoutes.fileAddOrEditScreen)}
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
