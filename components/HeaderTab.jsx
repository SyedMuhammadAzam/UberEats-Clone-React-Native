import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HeaderTab = (props) => {


  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

export default HeaderTab;

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={styles(props).container1}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text style={styles(props).text}>{props.text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = (props) =>
  StyleSheet.create({
    container1: {
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 30,
    },
    text: {
      color: props.activeTab === props.text ? "white" : "black",
      fontSize: 12,
      fontWeight: "900",
    },
  });
