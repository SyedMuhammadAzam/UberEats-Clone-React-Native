import React from "react";
import { StyleSheet, Text, View } from "react-native";
import About from "../components/restautantDetail/About";
import MenuItems from "../components/restautantDetail/MenuItems";
import { Divider } from "react-native-elements";
import ViewCart from "../components/restautantDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description:
      "The pasta, meat, cheese and tomato sauce in lasagna all contain B vitamins.",
    price: "$13.50",
    image:
      "https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg",
  },
  {
    title: "Tandoori chicken",
    description:
      "Tandoor is referred to a special kitchen appliance utilized in Asian regions.",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles are basically corn tortilla pieces that are fried, cooked in salsa, and sprinkled with cheese.",
    price: "$14.30",
    image:
      "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg",
  },
  {
    title: "Chicken biryani",
    description:
      "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent.",
    price: "$16.00",
    image:
      "https://www.teaforturmeric.com/wp-content/uploads/2020/11/Pakistani-Chicken-Biryani-2-e1608874346462.jpg",
  },
  {
    title: "Haleem",
    description:
      "Haleem is a type of stew that is widely consumed in the Indian subcontinent, the Middle East and Central Asia.",
    price: "$10.00",
    image: "https://static.toiimg.com/thumb/54672891.cms?width=1200&height=900",
  },
]

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <About route={route} />
      <Divider style={{ marginVertical: 10 }} width={2} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
