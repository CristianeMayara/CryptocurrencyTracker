import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text } from "react-native";
import FetchCoinData from "./../Actions/FetchCoinData";
import CoinCard from "./CoinCard";
import index from "axios";

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;

    return crypto.data.map((coin, index) => (
      <CoinCard
        key={index}
        coin_name={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_7d={coin.percent_change_7d}
        percent_change_24h={coin.percent_change_24h}
      />
    ));
  }

  render() {
    return <ScrollView>{this.renderCoinCards()}</ScrollView>;
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
