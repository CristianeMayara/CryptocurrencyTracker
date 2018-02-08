import { combineReducers } from "redux";
import CryptoReducer from "./CryptoRecducer";

export default combineReducers({
  crypto: CryptoReducer
});
