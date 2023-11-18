import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, Linking } from "react-native";
import styles from "./sidebar.style";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SideBar = ({ setOpen }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeIcon} onPress={() => setOpen(false)}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navTab}
          onPress={() => router.push('profile')}
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
