import { Logo } from "@/assets/images";
import { Slot } from "expo-router";
import { Image, Text, View } from "react-native";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        <Image source={Logo} style={{ width: 50, height: 50 }} />
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>CoShell</Text>
      </View>
      <Slot />
    </View>
  );
}
