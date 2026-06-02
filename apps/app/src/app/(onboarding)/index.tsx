import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function OnboardingFirst() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        {/* Title and Subtitle */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.textContainer}>
          <Text style={styles.title}>Control your digital fingerprint</Text>
          <Text style={styles.subtitle}>
           Let us scan the internet for exposed personal data and see what may be putting you and your family at risk.
          </Text>
        </Animated.View>

        {/* Floating Badges with Connection Lines */}
        <View style={styles.visualContainer}>
          {/* Connection Lines */}
          <View style={styles.connectionLine1} />
          <View style={styles.connectionLine2} />
          <View style={styles.connectionLine3} />

          {/* Badges */}
          <Animated.View
            entering={FadeIn.delay(300).duration(800)}
            style={[styles.badge, styles.phoneBadge]}
          >
            <Feather name="smartphone" size={18} color="#FF453A" />
            <Text style={styles.badgeText}>Phone exposed</Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(500).duration(800)}
            style={[styles.badge, styles.addressBadge]}
          >
            <Feather name="map-pin" size={18} color="#FFD60A" />
            <Text style={styles.badgeText}>Address found</Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(700).duration(800)}
            style={[styles.badge, styles.emailBadge]}
          >
            <Feather name="mail" size={18} color="#FF453A" />
            <Text style={styles.badgeText}>Email breach</Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(900).duration(800)}
            style={[styles.badge, styles.profileBadge]}
          >
            <Feather name="user" size={18} color="#30D158" />
            <Text style={styles.badgeText}>Public profile</Text>
          </Animated.View>
        </View>

        {/* Bottom Section */}
        <Animated.View entering={FadeInDown.delay(1000).duration(600)} style={styles.footer}>
          {/* Primary Button */}
          <Button
            title="Get Started"
            onPress={() => router.push("/second")}
          />

          {/* Alternative Link */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.linkText}>I already have an account</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 12,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 16,
    color: "#A0A0A5",
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "System",
  },
  visualContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    position: "relative",
  },
  // Connection lines styled behind the badges
  connectionLine1: {
    position: "absolute",
    left: "25%",
    top: "35%",
    width: "50%",
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  connectionLine2: {
    position: "absolute",
    left: "30%",
    top: "35%",
    width: 1,
    height: "20%",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  connectionLine3: {
    position: "absolute",
    left: "50%",
    top: "45%",
    width: "25%",
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(28, 28, 30, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
    fontFamily: "System",
  },
  // Position adjustments for badges
  phoneBadge: {
    left: 30,
    top: "20%",
  },
  addressBadge: {
    right: 30,
    top: "32%",
  },
  emailBadge: {
    left: 20,
    bottom: "35%",
  },
  profileBadge: {
    right: 40,
    bottom: "22%",
  },

  // Footer Styles
  footer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 28,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3A3A3C",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 18, // Slightly elongated active dot
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "System",
  },
  linkText: {
    color: "#8E8E93",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "System",
    paddingVertical: 8,
  },
});
