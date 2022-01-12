import React from 'react'
import { StyleSheet, Text, View , SafeAreaView } from 'react-native'
import Navigation from './Navigation';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';

const App = () => {
  return (
    <>
      <Navigation />
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
  }
})
