import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const RightButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerRight}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// const SecondaryButton = ({ title, onPress = () => {} }) => {
//   return (
//     <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//       <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
//         <Text style={{ ...style.title, color: COLORS.primary }}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

const style = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 14 },
  btnContainer: {
    backgroundColor: "red",
    height: 20,
    width: 80,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  btnContainerRight: {
    backgroundColor: "red",
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
  },
});

// export { PrimaryButton, SecondaryButton };
export { PrimaryButton, RightButton };
