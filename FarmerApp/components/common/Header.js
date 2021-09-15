import React from "react";

import {
  FlatList,
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
