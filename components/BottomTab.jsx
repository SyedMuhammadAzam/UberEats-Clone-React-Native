import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native'

const BottomTab = () => {
    return (
        <SafeAreaView style={{flexDirection:'row', justifyContent:'space-between' , margin:10 , marginHorizontal:20}}>
            <IconComponent name='Home' iconName='home' />
            <IconComponent name='Search' iconName='search' />
            <IconComponent name='Grocery' iconName='shopping-bag' />
            <IconComponent name='Orders' iconName='list' />
            <IconComponent name='Account' iconName='user' />
        </SafeAreaView>
    )
}

export default BottomTab

const IconComponent = (props) => {
    return(
    <TouchableOpacity>
            <Icon style={{marginBottom:4 , alignSelf:'center'}} name={props.iconName} size={25} />
            <Text>{props.name}</Text>
            
    </TouchableOpacity>
    )
}



const styles = StyleSheet.create({})
