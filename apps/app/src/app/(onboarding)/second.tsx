import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { Image } from "expo-image";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function OnboardingSecond() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        {/* Title and Subtitle */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.textContainer}>
          <Text style={styles.title}>Scanning</Text>
          <Text style={styles.subtitle}>
            Searching thousands of databases for your information.
          </Text>
        </Animated.View>

        {/* Radar Scanner Visual with Badges */}
        <View style={styles.visualContainer}>
          {/* Radar Center */}
          <View style={styles.radarContainer}>
            {/* Static Fingerprint Image */}
            <Image
              source={require("@/assets/images/app/scan.png")}
              style={styles.radarImage}
              contentFit="contain"
            />
            {/* Outer Static Circle */}
            <View style={styles.outerStaticCircle} />
          </View>

          {/* Badges Absolute Layout */}
          <Animated.View
            entering={FadeIn.delay(300).duration(800)}
            style={[styles.badge, styles.searchBadge]}
          >
            <View style={styles.searchIcon}>
              <View style={styles.searchCircle} />
              <View style={styles.searchHandle} />
            </View>
            <Text style={styles.badgeText}>People Search</Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(500).duration(800)}
            style={[styles.badge, styles.brokersBadge]}
          >
            <View style={styles.dbIcon}>
              <View style={styles.dbCylinder} />
              <View style={[styles.dbCylinder, { marginTop: 2 }]} />
              <View style={[styles.dbCylinder, { marginTop: 2 }]} />
            </View>
            <Text style={styles.badgeText}>Data Brokers</Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(700).duration(800)}
            style={[styles.badge, styles.breachBadge]}
          >
            <View style={styles.warningIcon}>
              <View style={styles.warningTriangle} />
              <Text style={styles.warningExclamation}>!</Text>
            </View>
            <Text style={styles.badgeText}>Breach Data</Text>
          </Animated.View>

          <Animated.View
            entering={FadeIn.delay(900).duration(800)}
            style={[styles.badge, styles.recordsBadge]}
          >
            <View style={styles.docIcon}>
              <View style={styles.docLine} />
              <View style={[styles.docLine, { width: 8 }]} />
            </View>
            <Text style={styles.badgeText}>Public Records</Text>
          </Animated.View>
        </View>

        {/* Bottom Section */}
        <Animated.View entering={FadeInDown.delay(1000).duration(600)} style={styles.footer}>
          {/* Primary Button */}
          <Button
            title="Next"
            onPress={() => router.push("/third")}
          />

          {/* Alternative Link */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => router.push("/third")}
          >
            <Text style={styles.linkText}>Skip</Text>
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
    alignItems: "center",
    position: "relative",
  },
  radarContainer: {
    width: 290,
    height: 290,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  radarImage: {
    width: 200,
    height: 200,
    zIndex: 1,
  },
  outerStaticCircle: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.2)", // 20% opacity white
    zIndex: 2,
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
  // Position adjustments around the central radar
  searchBadge: {
    left: 20,
    top: "15%",
  },
  brokersBadge: {
    right: 20,
    top: "22%",
  },
  breachBadge: {
    left: 30,
    bottom: "22%",
  },
  recordsBadge: {
    right: 30,
    bottom: "15%",
  },
  // Custom Icon Styles
  searchIcon: {
    width: 16,
    height: 16,
    position: "relative",
  },
  searchCircle: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
  searchHandle: {
    position: "absolute",
    bottom: 1,
    right: 1,
    width: 5,
    height: 1.5,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "45deg" }],
  },
  dbIcon: {
    width: 14,
    height: 16,
    justifyContent: "center",
  },
  dbCylinder: {
    width: 14,
    height: 3.5,
    borderRadius: 1.75,
    borderWidth: 1.2,
    borderColor: "#FFFFFF",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  warningIcon: {
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  warningTriangle: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderLeftColor: "transparent",
    borderRightWidth: 8,
    borderRightColor: "transparent",
    borderBottomWidth: 14,
    borderBottomColor: "#FF453A",
  },
  warningExclamation: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    top: 1.5,
  },
  docIcon: {
    width: 12,
    height: 16,
    borderRadius: 1.5,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    padding: 2,
    justifyContent: "space-between",
  },
  docLine: {
    height: 1.2,
    width: 6,
    backgroundColor: "#FFFFFF",
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
