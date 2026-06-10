import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function OnboardingThird() {
  const router = useRouter();

  // Form states
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [prevAddress, setPrevAddress] = React.useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Header showBorder={false} transparent={true} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.body}>
          {/* Title and Subtitle */}
          <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.textContainer}>
            <Text style={styles.title}>Start your free privacy scan</Text>
            <Text style={styles.subtitle}>
              See what's exposed. Enter your details to build your digital fingerprint report.
            </Text>
          </Animated.View>

          {/* Form Fields Section */}
          <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.formContainer}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>FULL NAME</Text>
              <TextInput
                style={styles.input}
                placeholder="John Doe"
                placeholderTextColor="#48484A"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                keyboardAppearance="dark"
              />
            </View>

            {/* Email Address */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <TextInput
                style={styles.input}
                placeholder="john@example.com"
                placeholderTextColor="#48484A"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                autoComplete="email"
                keyboardAppearance="dark"
              />
            </View>

            {/* Previous Address (Optional) */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Previous address (Optional)</Text>
              <TextInput
                style={styles.input}
                placeholder="Optional former residency"
                placeholderTextColor="#48484A"
                value={prevAddress}
                onChangeText={setPrevAddress}
                keyboardAppearance="dark"
              />
            </View>
          </Animated.View>

          {/* Consent Text */}
          <Animated.View entering={FadeInDown.delay(500).duration(600)} style={styles.consentContainer}>
            <Text style={styles.consentText}>
              We use this information only to run your scan and prepare your results. By continuing, you agree to our{" "}
              <Text style={styles.linkUnderline}>Terms</Text> and acknowledge our{" "}
              <Text style={styles.linkUnderline}>Privacy Policy</Text>.
            </Text>
          </Animated.View>

          {/* Bottom Button Section */}
          <Animated.View entering={FadeInDown.delay(700).duration(600)} style={styles.footer}>
            {/* Primary Button */}
            <Button
              title="Start Free Scan"
              onPress={() => router.push("/(freeScan)" as any)}
            />

            {/* Alternative Link */}
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => router.push("/signup")}
              style={styles.skipButton}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Trust Badges Bar at the Bottom */}
      <Animated.View entering={FadeInDown.delay(900).duration(600)} style={styles.trustBar}>
        <View style={styles.trustItem}>
          <Feather name="check-circle" size={18} color="#30D158" />
          <Text style={styles.trustText}>Real Results</Text>
        </View>

        <View style={styles.trustDivider} />

        <View style={styles.trustItem}>
          <Feather name="alert-triangle" size={18} color="#FF9F0A" />
          <Text style={styles.trustText}>Clear Risks</Text>
        </View>

        <View style={styles.trustDivider} />

        <View style={styles.trustItem}>
          <Feather name="zap" size={18} color="#FFFFFF" />
          <Text style={styles.trustText}>ACTIONABLE STEPS</Text>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContent: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 30,
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
    fontSize: 15,
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 22,
    fontFamily: "System",
    paddingHorizontal: 16,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  inputGroup: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    color: "#8E8E93",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 8,
    fontFamily: "System",
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: "rgba(28, 28, 30, 0.7)",
    borderRadius: 14,
    height: 56,
    paddingHorizontal: 18,
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "System",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  consentContainer: {
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: 20,
  },
  consentText: {
    color: "#8E8E93",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    fontFamily: "System",
  },
  linkUnderline: {
    color: "#FFFFFF",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  skipButton: {
    paddingVertical: 8,
  },
  skipText: {
    color: "#8E8E93",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "System",
  },
  // Trust Bar Styles
  trustBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000000",
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "100%",
  },
  trustItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  trustText: {
    color: "#8E8E93",
    fontSize: 10,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
    fontFamily: "System",
    letterSpacing: 0.2,
  },
  trustDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#1C1C1E",
  },
});
