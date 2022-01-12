import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../Firebase";
import LottieView from "lottie-react-native";

const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)

  // const items = useSelector(state => state);
  const { items, restaurantName } = useSelector(
    (state) => state.cart.selectedItems
  );
  // useSelector( state => !!state.profile.entities[userId] ? state.profile.entities[userId].loadingState : 'idle' )

  console.log("ViewCArt----------------------", items[0]);
  const itemget = useSelector((state) => state.cart.selectedItems.items);

  // const item = items?.cart?.selectedItems?.items;

  // console.log("============",item);

  // console.log(itemget[0].price , restaurantName );

  const total = items
    ?.map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  console.log("TOOOOOTALLLLLL", total);

  const totalUSD = total?.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log("UUUUUUUUUUUSSSSSSSSSSSSSSDDDDDDDDDDDD", totalUSD);

  //Firebase Code .......

  const addOrderToFirebase = () => {
    setLoading(true)
    setModalVisible(false);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false)
          
          {
            navigation.navigate("OrderCompleted", { restaurantName, totalUSD });
          }
          console.log("ordered");
        }, 2500);
      });
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: "60%",
      borderWidth: 1,
      borderRadius: 15,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 25,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
              {items.map((item, index) => (
                <OrderItem key={index} item={item} />
              ))}
              <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Subtotal</Text>
                <Text>{totalUSD}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 40,
                  //   borderWidth: 4,
                  //   borderColor: "gray",
                }}
              >
                <TouchableOpacity
                  style={{
                    // marginTop: 20,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    backgroundColor: "black",
                    padding: 13,
                    borderRadius: 30,
                    position: "relative",
                    width: "75%",
                    // position: "relative",
                    // borderWidth: 2,
                    // borderColor: "pink",
                  }}
                  onPress={() => {
                    addOrderToFirebase();
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>CheckOut</Text>
                  <Text
                    style={{
                      position: "absolute",
                      right: 15,
                      color: "white",
                      fontSize: 15,
                      top: 15,
                    }}
                  >
                    {total ? totalUSD : ""}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            // alignItems: "center",
            flexDirection: "row",
            // justifyContent: "center",
            position: "absolute",
            bottom: 60,
            // zIndex: 999,
            // borderWidth: 2,
            // borderColor: "red",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              //   borderWidth: 4,
              //   borderColor: "gray",
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                // marginTop: 20,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "black",
                padding: 13,
                borderRadius: 30,
                width: "70%",
                // position: "relative",
                // borderWidth: 2,
                // borderColor: "pink",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>ViewCart</Text>
              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                  top: 15.5,
                }}
              >
                {totalUSD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
