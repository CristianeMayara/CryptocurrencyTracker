import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import index from "axios";
import CoinCard from "./CoinCard";
import FetchCoinData from "./../Actions/FetchCoinData";

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;

    return crypto.data.map((coin, index) => (
      <CoinCard
        key={index}
        symbol={coin.symbol}
        coin_name={coin.name}
        price_usd={coin.price_usd}
        percent_change_7d={coin.percent_change_7d}
        percent_change_24h={coin.percent_change_24h}
      />
    ));
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            animation="fade"
            textContent={"Loading..."}
            visible={crypto.isFetching}
            textStyle={{ color: "#253145" }}
          />
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 45,
    paddingTop: 35
  }
};

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
