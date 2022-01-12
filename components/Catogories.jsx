import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Catogories = () => {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick Up",
    },
    {
      image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../assets/images/brea-d.png"),
      text: "Bakery Items",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../assets/images/deal-s.png"),
      text: "Deals",
    },
    {
      image: require("../assets/images/coffe-e.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../assets/images/dessert-s.png"),
      text: "Desserts",
    },
  ];
  return (
    <View
      style={{ marginTop: 6, backgroundColor: "white", paddingVertical: 10 }}
    >
      {/* 
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView> */}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: "center",
              marginRight: 25,
              marginLeft: 5,
              paddingLeft: 8,
            }}
          >
            <Image source={item.image} style={{ width: 50, height: 40 }} />
            <Text style={{ fontSize: 14, fontWeight: "900" }}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Catogories;

const styles = StyleSheet.create({});
