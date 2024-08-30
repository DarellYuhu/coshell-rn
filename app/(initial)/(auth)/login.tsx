import { AppleLogo, GoogleLogo } from "@/assets/images";
import { router } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const handleNavigation = () => {
    router.push("signup");
  };
  return (
    <>
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>SIGN IN</Text>
        <Text>
          Looks like you don’t have an account. Let’s create a new account for
          you.
        </Text>
      </View>

      <View style={{ gap: 15, marginTop: 30 }}>
        <View style={{ gap: 8 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{ gap: 8 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => router.push("home")}
        >
          <Text style={{ fontWeight: "600" }}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>OR</Text>

      <View style={{ gap: 18 }}>
        <TouchableOpacity style={styles.authBtn}>
          <Image source={GoogleLogo} style={styles.authImg} />
          <Text style={styles.authLabel}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.authBtn, { backgroundColor: "#393939" }]}
        >
          <Image
            source={AppleLogo}
            style={[styles.authImg, { borderRadius: 5 }]}
          />
          <Text style={styles.authLabel}>Sign Up with Apple</Text>
        </TouchableOpacity>
        <Pressable
          onPress={handleNavigation}
          style={[
            styles.authBtn,
            {
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "black",
              justifyContent: "center",
            },
          ]}
        >
          <Text
            style={{
              color: "black",
              textAlign: "center",
            }}
          >
            Create New Account
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  label: { fontSize: 15, color: "gray" },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  submit: {
    backgroundColor: "#34e0a1",
    alignItems: "center",
    paddingVertical: 13,
    borderRadius: 14,
  },
  authBtn: {
    flexDirection: "row",
    backgroundColor: "#4889f4",
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 14,
  },
  authImg: { backgroundColor: "white", borderRadius: 50 },
  authLabel: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  or: {
    color: "grey",
    fontWeight: "600",
    fontSize: 13,
    alignSelf: "center",
    paddingVertical: 20,
  },
});
