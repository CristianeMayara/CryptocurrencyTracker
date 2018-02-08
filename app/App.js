import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Store from "./Store";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
        </View>
      </Provider>
    );
  }
}
