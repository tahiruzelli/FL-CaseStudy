import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayoutNav() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          animation: "default",
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
