import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, Linking } from "react-native";
import styles from "./sidebar.style";
import { useRouter } from "expo-router";

const SideBar = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navTab}
          onPress={() => router.push("profile")}
        >
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navTab}>
          <Text style={styles.navText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideBar;
