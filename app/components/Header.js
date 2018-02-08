import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cryptocurrency</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    elevation: 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    margin: 10,
    fontSize: 20,
    textAlign: "center"
  }
});

export default Header;
