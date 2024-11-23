import { Stack } from "expo-router";

export default function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        animation: "default",
        headerShown: false,
      }}
    ></Stack>
  );
}
