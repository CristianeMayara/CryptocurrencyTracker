import { AppRegistry } from "react-native";
import App from "./app/App";
import Header from "./app/components/Header";
import CryptoContainer from "./app/components/CryptoContainer";

AppRegistry.registerComponent("cryptocurrent", () => App);

export { Header, CryptoContainer };
