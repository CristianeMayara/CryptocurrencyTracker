import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}
