import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
  StatusBar,
} from "react-native";
//import Header from './Header';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#444" />
      {/* <Header/> */}
      <Text>Profile Screen</Text>
      <Button title="Click Here" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
