import FileAddScreenAppBar from "@/src/components/molecules/file-add-screen-appbar";
import { View, StyleSheet } from "react-native";

import React from "react";
import FileAddTabs from "@/src/components/molecules/file-add-tabs";

export default function FileAddOrEditScreen() {
  function body() {
    return <View></View>;
  }
  return (
    <View style={{ flex: 1 }}>
      <FileAddScreenAppBar />
      <FileAddTabs screen={body} />
    </View>
  );
}

const styles = StyleSheet.create({});
