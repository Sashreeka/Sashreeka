import React from "react";
import { View, Text, Button } from "react-native";

export default function ForgetPassword({ navigation }) {
  return (
    <View>
      <Text>Forget Password</Text>
      <Button
        title="signin"
        onPress={() => navigation.navigate("SigninScreen")}
      />
    </View>
  );
}
