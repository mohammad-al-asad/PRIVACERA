import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import Animated, {
  FadeIn,
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function OnboardingFirst() {
  const router = useRouter();

  // Floating animation values for the badges
  const float1 = useSharedValue(0);
  const float2 = useSharedValue(0);
  const float3 = useSharedValue(0);
  const float4 = useSharedValue(0);

  // Breathing animation values for the background glow
  const scale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.4);

  React.useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.08, { duration: 2500 }),
        withTiming(1, { duration: 2500 })
      ),
      -1,
      true
    );

    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.6, { duration: 2500 }),
        withTiming(0.3, { duration: 2500 })
      ),
      -1,
      true
    );

    // Dynamic, out-of-sync floating loops
    float1.value = withRepeat(
      withSequence(
        withTiming(-6, { duration: 2200 }),
        withTiming(6, { duration: 2200 })
      ),
      -1,
      true
    );

    float2.value = withRepeat(
      withSequence(
        withTiming(5, { duration: 2600 }),
        withTiming(-5, { duration: 2600 })
      ),
      -1,
      true
    );

    float3.value = withRepeat(
      withSequence(
        withTiming(-7, { duration: 2400 }),
        withTiming(7, { duration: 2400 })
      ),
      -1,
      true
    );

    float4.value = withRepeat(
      withSequence(
        withTiming(4, { duration: 2000 }),
        withTiming(-4, { duration: 2000 })
      ),
      -1,
      true
    );
  }, []);

  const animatedGlowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: glowOpacity.value,
    };
  });

  const animatedFloat1 = useAnimatedStyle(() => ({
    transform: [{ translateY: float1.value }],
  }));

  const animatedFloat2 = useAnimatedStyle(() => ({
    transform: [{ translateY: float2.value }],
  }));

  const animatedFloat3 = useAnimatedStyle(() => ({
    transform: [{ translateY: float3.value }],
  }));

  const animatedFloat4 = useAnimatedStyle(() => ({
    transform: [{ translateY: float4.value }],
  }));

  return (
    <View style={styles.container}>
      <Header showBorder={false} transparent={true} />

      <View style={styles.body}>
        {/* Title and Subtitle */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.textContainer}>
          <Text style={styles.title}>Take Control</Text>
          <Text style={styles.subtitle}>
            Let us scan the internet for exposed personal data and see what may be putting you and your family at risk.
          </Text>
        </Animated.View>

        {/* Floating Badges with Fingerprint Centerpiece */}
        <View style={styles.visualContainer}>
          <View style={styles.fingerprintGroup}>

            {/* Centered Fingerprint Image */}
            <Image
              source={require("@/assets/images/app/fingerprint.png")}
              style={styles.fingerprintImage}
              contentFit="contain"
            />

            {/* Badges */}
            <Animated.View
              entering={FadeIn.delay(300).duration(800)}
              style={[styles.badge, styles.phoneBadge, animatedFloat1]}
            >
              <Feather name="smartphone" size={16} color="#FF453A" />
              <Text style={styles.badgeText}>Phone exposed</Text>
            </Animated.View>

            <Animated.View
              entering={FadeIn.delay(500).duration(800)}
              style={[styles.badge, styles.addressBadge, animatedFloat2]}
            >
              <Feather name="map-pin" size={16} color="#FF9F0A" />
              <Text style={styles.badgeText}>Address risk</Text>
            </Animated.View>

            <Animated.View
              entering={FadeIn.delay(700).duration(800)}
              style={[styles.badge, styles.familyBadge, animatedFloat3]}
            >
              <Feather name="users" size={16} color="#FF453A" />
              <Text style={styles.badgeText}>Data Brokers</Text>
            </Animated.View>

            <Animated.View
              entering={FadeIn.delay(900).duration(800)}
              style={[styles.badge, styles.brokerBadge, animatedFloat4]}
            >
              <Feather name="search" size={16} color="#FF9F0A" />
              <Text style={styles.badgeText}>Breach Data</Text>
            </Animated.View>
          </View>
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
    fontSize: 34,
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
  },
  fingerprintGroup: {
    width: 320,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  fingerprintImage: {
    width: 130,
    height: 130,
    zIndex: 2,
  },
  glow: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 4,
    zIndex: 1,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(28, 28, 30, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 3,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
    fontFamily: "System",
  },
  // Precise float positions matching the layout of the second screen
  phoneBadge: {
    top: 30,
    left: 15,
  },
  addressBadge: {
    top: 65,
    right: 15,
  },
  familyBadge: {
    bottom: 65,
    left: 15,
  },
  brokerBadge: {
    bottom: 30,
    right: 20,
  },
  // Footer Styles
  footer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  linkText: {
    color: "#8E8E93",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "System",
    paddingVertical: 8,
  },
});
