import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MenuItems = ({ restaurantName, foods, hideCheckbox, marginLeft }) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector((state) => state.cart.selectedItems.items);
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  console.log(isFoodInCart);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <FlatList
        data={foods}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <View style={styles.menuItem}>
              <FoodInfo price={item.price} title={item.title} description={item.description} />
              <FoodImage image={item.image} />
            </View>
          </View>
        )}
        /> */}

      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItem}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}

            <FoodInfo price={food} title={food} description={food} />
            <FoodImage image={food} marginLeft={marginLeft} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = (props) => {
  return (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.title.title}</Text>
      <Text>{props.description.description}</Text>
      <Text>{props.price.price}</Text>
    </View>
  );
};

const FoodImage = ({ marginLeft, ...props }) => {
  return (
    <>
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          marginLeft: marginLeft,
        }}
        source={{ uri: props.image.image }}
      />
    </>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
