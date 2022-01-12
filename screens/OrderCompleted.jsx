import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restautantDetail/MenuItems";
import firebase from "../Firebase";

const OrderCompleted = ({ route }) => {
  const { restaurantName, totalUSD } = route.params;

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    {/* green checkmark */}
    <View
      style={{
        alignItems: "center",
        height: "100%",
      }}
    >
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" , marginBottom: 30 }}>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <MenuItems
          foods={lastOrder.items}
          hideCheckbox={true}
          marginLeft={10}
        />
        <LottieView
          style={{ height: 200, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </ScrollView>
    </View>
  </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({});
