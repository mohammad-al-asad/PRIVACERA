import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function OnboardingSecond() {
  const router = useRouter();

  // Interactive selection state matching the mockup defaults:
  // "I want to see what's exposed", "I'm worried about identity theft", "I want to protect my family" are selected by default.
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    "exposed",
    "theft",
    "family",
  ]);

  const options = [
    { id: "exposed", label: "I want to see what's exposed" },
    { id: "theft", label: "I'm worried about identity theft" },
    { id: "online", label: "I found my information online" },
    { id: "privacy", label: "I want more privacy" },
    { id: "family", label: "I want to protect my family" },
  ];

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Header showBorder={false} transparent={true} />

      <View style={styles.body}>
        {/* Title and Subtitle */}
        <Animated.View entering={FadeInDown.delay(100).duration(600)} style={styles.textContainer}>
          <Text style={styles.title}>Personalize your scan</Text>
          <Text style={styles.subheading}>What brings you here today?</Text>
          <Text style={styles.subtitle}>
            Searching thousands of databases for your information.
          </Text>
        </Animated.View>

        {/* Options List Section */}
        <View style={styles.visualContainer}>
          <View style={styles.optionsList}>
            {options.map((option, index) => {
              const isSelected = selectedOptions.includes(option.id);
              return (
                <Animated.View
                  key={option.id}
                  entering={FadeInDown.delay(200 + index * 80).duration(500)}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => toggleOption(option.id)}
                    style={[
                      styles.optionCard,
                      isSelected ? styles.selectedCard : styles.unselectedCard,
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected ? styles.selectedText : styles.unselectedText,
                      ]}
                    >
                      {option.label}
                    </Text>
                    {isSelected && (
                      <Feather name="check-circle" size={20} color="#30D158" />
                    )}
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </View>
        </View>

        {/* Bottom Section */}
        <Animated.View entering={FadeInDown.delay(800).duration(600)} style={styles.footer}>
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
    fontSize: 34,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 6,
    fontFamily: "System",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
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
  visualContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  optionsList: {
    width: "100%",
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 14,
    paddingHorizontal: 20,
    height: 58,
    marginBottom: 12,
    borderWidth: 1,
  },
  unselectedCard: {
    backgroundColor: "rgba(28, 28, 30, 0.4)",
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  selectedCard: {
    backgroundColor: "rgba(28, 28, 30, 0.7)",
    borderColor: "rgba(255, 255, 255, 0.16)",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "System",
  },
  unselectedText: {
    color: "#8E8E93",
  },
  selectedText: {
    color: "#FFFFFF",
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
