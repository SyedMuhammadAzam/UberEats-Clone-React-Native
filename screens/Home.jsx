import React , {useState , useEffect} from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import ButtomTab from "../components/BottomTab";
import Catogories from "../components/Catogories";
import HeaderTab from "../components/HeaderTab";
import RestaurentItem , {localRestaurants} from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";




const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";


const Home = ({navigation}) => {

  const [restauratnData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState("San Antonio,TX,USA")
  const [activeTab, setActiveTab] = useState("Delivery");



  const getRestaurantsFromYelp =  () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
      {

       
        setRestaurantData(json.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())))
      
    }
      )
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city , activeTab]);

  

  return (
    <SafeAreaView style={{backgroundColor:"#eee" , flex:1 , paddingTop: Platform.OS === 'android' ? 45 : 0}}>
      <View style={{backgroundColor:'white' , padding:10}}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity}/>
      </View>
      <Catogories/>
      <ScrollView>
      <RestaurentItem restaurantData={restauratnData} navigation={navigation} />
      </ScrollView>
      {/* <ButtomTab /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
