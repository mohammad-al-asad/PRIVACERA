import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const isAuthenticated = false;
  const isFirstTime = false;

  if (loading) {
    return (
      <View style={styles.container}>
        {/* Center branding elements */}
        <View style={styles.centerContainer}>
          <Animated.Image
            entering={FadeIn.delay(200).duration(800)}
            source={require("@/assets/images/app/fingerprint.png")}
            style={styles.logo}
          />
          <Animated.Text entering={FadeInDown.delay(400).duration(600)} style={styles.title}>
            Privacera
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(600).duration(600)} style={styles.subtitle}>
            Protect your digital identity
          </Animated.Text>
        </View>

        {/* Bottom security badges */}
        <Animated.View entering={FadeIn.delay(800).duration(800)} style={styles.bottomContainer}>
          <Feather name="shield" size={18} color="#3E3E42" style={{ marginBottom: 10 }} />
          <Text style={styles.encryptedText}>SECURE • PRIVATE • ENCRYPTED</Text>
        </Animated.View>
      </View>
    );
  }

  // Routing checks
  if (isFirstTime) {
    return <Redirect href={"/(onboarding)" as any} />;
  } else if (isAuthenticated) {
    return <Redirect href={"/(tabs)" as any} />;
  } else {
    return <Redirect href={"/(auth)/signin" as any} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 70,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    tintColor: "#FFFFFF",
    marginBottom: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
    fontFamily: "System",
    letterSpacing: 0.5,
  },
  subtitle: {
    color: "#8E8E93",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "System",
  },
  bottomContainer: {
    alignItems: "center",
  },
  encryptedText: {
    color: "#48484A",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    fontFamily: "System",
  },
});
