import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function OnboardingThird() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        {/* Title and Subtitle */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.textContainer}>
          <Text style={styles.title}>Remove Requests</Text>
          <Text style={styles.subtitle}>
            Start supported takedowns or follow manual steps.
          </Text>
        </Animated.View>

        {/* Stack of Status Cards */}
        <View style={styles.cardsContainer}>
          {/* Card 1: Whitepages */}
          <Animated.View
            entering={FadeInUp.delay(300).duration(500)}
            style={[styles.card, styles.card1]}
          >
            <View style={[styles.iconContainer, styles.checkIconBg]}>
              <Feather name="check" size={20} color="#30D158" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Whitepages</Text>
              <Text style={styles.cardSubtitle}>Remove request supported</Text>
            </View>
            <View style={[styles.statusBadge, styles.activeBadge]}>
              <Text style={[styles.statusBadgeText, styles.activeText]}>ACTIVE</Text>
            </View>
          </Animated.View>

          {/* Card 2: Spokeo */}
          <Animated.View
            entering={FadeInUp.delay(500).duration(500)}
            style={[styles.card, styles.card2]}
          >
            <View style={[styles.iconContainer, styles.infoIconBg]}>
              <Feather name="info" size={20} color="#FF9F0A" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Spokeo</Text>
              <Text style={styles.cardSubtitle}>Manual steps available</Text>
            </View>
            <View style={[styles.statusBadge, styles.manualBadge]}>
              <Text style={[styles.statusBadgeText, styles.manualText]}>MANUAL</Text>
            </View>
          </Animated.View>

          {/* Card 3: MyLife */}
          <Animated.View
            entering={FadeInUp.delay(700).duration(500)}
            style={[styles.card, styles.card3]}
          >
            <View style={[styles.iconContainer, styles.eyeIconBg]}>
              <Feather name="eye" size={20} color="#8E8E93" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>MyLife</Text>
              <Text style={styles.cardSubtitle}>Public profile detected</Text>
            </View>
            <View style={[styles.statusBadge, styles.alertBadge]}>
              <Text style={[styles.statusBadgeText, styles.alertText]}>ALERT</Text>
            </View>
          </Animated.View>
        </View>

        {/* Bottom Section */}
        <Animated.View entering={FadeInDown.delay(900).duration(600)} style={styles.footer}>
          {/* Primary Button */}
          <Button
            title="Create an account"
            onPress={() => router.push("/signup")}
          />

          {/* Alternative Link */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.linkText}>Sign in</Text>
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
  cardsContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16, // Reduced padding to make cards wider
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161618", // Solid dark color to prevent overlapping text from showing through
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    minHeight: 110,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  card1: {
    zIndex: 3,
    width: "100%",
  },
  card2: {
    zIndex: 2,
    marginTop: -36,
    width: "95%",
  },
  card3: {
    zIndex: 1,
    marginTop: -36,
    width: "90%",
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  // Icon colors
  checkIconBg: {
    backgroundColor: "rgba(48, 209, 88, 0.15)",
  },
  infoIconBg: {
    backgroundColor: "rgba(255, 159, 10, 0.15)",
  },
  eyeIconBg: {
    backgroundColor: "rgba(142, 142, 147, 0.15)",
  },

  cardContent: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "System",
  },
  cardSubtitle: {
    color: "#A0A0A5",
    fontSize: 13,
    marginTop: 2,
    fontFamily: "System",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    fontFamily: "System",
  },
  activeBadge: {
    borderColor: "rgba(48, 209, 88, 0.3)",
    backgroundColor: "rgba(48, 209, 88, 0.1)",
  },
  activeText: {
    color: "#30D158",
  },
  manualBadge: {
    borderColor: "rgba(255, 159, 10, 0.3)",
    backgroundColor: "rgba(255, 159, 10, 0.1)",
  },
  manualText: {
    color: "#FF9F0A",
  },
  alertBadge: {
    borderColor: "rgba(142, 142, 147, 0.3)",
    backgroundColor: "rgba(142, 142, 147, 0.1)",
  },
  alertText: {
    color: "#AEAEB2",
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
    width: 18,
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
