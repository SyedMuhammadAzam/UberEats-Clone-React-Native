import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: "https://www.almanacnews.com/blogs/photos/12/4219.jpg",
  price: "$$",
  rating: "4.5",
  reviews: "1200",
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

// const image = 'https://www.almanacnews.com/blogs/photos/12/4219.jpg'
// const title = 'Farmhouse Kitchen Thai Cuisine'
// const description = 'Thai · Comfort Food · $$ · 🎟️ · 4⭐· (3487+)'

const About = ({route}) => {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" · ");

  const description = `${formattedCategories} ${
    price ? " · " + price : ""
  } · 🎟️  · ${rating}⭐ (${reviews})+ `;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ height: 200, width: "100%" }}
    />
  );
};

const RestaurantTitle = (props) => {
  return (
    <Text
      style={{
        marginTop: 6,
        fontSize: 28,
        fontWeight: "700",
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
};
const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        marginTop: 6,
        fontSize: 16,
        fontWeight: "600",
        marginHorizontal: 18,
      }}
    >
      {props.description}
    </Text>
  );
};

const styles = StyleSheet.create({});
