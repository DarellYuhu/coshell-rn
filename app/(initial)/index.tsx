import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Logo } from "@/assets/images";
import { router } from "expo-router";

const GettingStarted = () => {
  const handleNavigate = () => {
    router.push("login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.headerBg}>
        <Image source={Logo} style={styles.image} />
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>CoShell</Text>
        <Text>A new way to control your home</Text>
      </View>

      <TouchableOpacity
        onPress={handleNavigate}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={{ fontWeight: "bold" }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  headerBg: {
    backgroundColor: "#101010",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    position: "absolute",
    bottom: -40,
    left: "40%",
  },
  title: { fontSize: 28, fontWeight: "bold" },
  button: {
    backgroundColor: "#34e0a1",
    padding: 8,
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 40,
  },
});
