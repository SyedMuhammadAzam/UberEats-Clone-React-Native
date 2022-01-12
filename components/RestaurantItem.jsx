import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';


export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

const RestaurantItem = ( { navigation , ...props }) => {
    return (
        <React.Fragment>
            {props.restaurantData.map((item,index) => (
                <TouchableOpacity activeOpacity={0.9} key={index} onPress={() => navigation.navigate('RestaurantDetail' ,  {
                  name: item.name,
                  image: item.image_url,
                  price: item.price,
                  reviews: item.review_count,
                  rating: item.rating,
                  categories: item.categories,
                })}>
                <View  style={{padding:12,marginTop:15,backgroundColor:"white"}}>
                <RestaurantImage image={item.image_url}/>
                <RestaurantInfo name={item.name} rating={item.rating}/>
            </View>
            </TouchableOpacity>
            ))}
        
        </React.Fragment>
    )
}

export default RestaurantItem


const RestaurantImage = (props) => {
    return (
    <>
    <Image style={{width:"100%" , height:200}} source={{uri : props.image}}/>
    <TouchableOpacity style={{position:'absolute' ,right:20 , top:20}}>
    <FontAwesome5 name="heart" size={24} color="white" />
    </TouchableOpacity>
    </>
    )
}


const RestaurantInfo = (props) => {
    return (
        <View style={{flexDirection:'row' , justifyContent:"space-between", padding:5}}>
           <View> 
            <Text style={{fontSize:16, fontWeight:"bold"}}>{props.name}</Text>
            <Text style={{color:"gray"}}>30 - 45 mins</Text>
            </View>
            <View style={{alignItems:"center" , padding:9 , backgroundColor:"#eee" , borderRadius:50 }}>
            <Text style={{fontStyle:"italic", fontWeight:"500"}}>{props.rating}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
