import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="getting-started">
      <Stack.Screen name="getting-started" />
    </Stack>
  );
}
