import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function VaultScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top > 0 ? insets.top + 8 : 16 }]}>
        <View style={styles.headerLeft}>
          <Feather name="lock" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
          <Text style={styles.headerTitle}>Vault</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Feather name="shield" size={60} color="#30D158" style={{ marginBottom: 16 }} />
        <Text style={styles.title}>Secure Identity Vault</Text>
        <Text style={styles.subtitle}>
          Your encrypted credentials and personal records are safely stored here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000000",
    paddingBottom: 16,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#1C1C1E",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1.5,
    fontFamily: "System",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
    fontFamily: "System",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#8E8E93",
    lineHeight: 20,
    textAlign: "center",
    fontFamily: "System",
  },
});
