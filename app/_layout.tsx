import { Stack } from "expo-router";

export default function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        animation: "default",
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
