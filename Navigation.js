import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import {Provider as ReduxProvider} from 'react-redux'

import configureStore from './redux/store'
import OrderCompleted from './screens/OrderCompleted'


const Stack = createNativeStackNavigator()

const store = configureStore()

const ScreenOptions = {
    headerShown : false,
}

const Navigation = () => {
    return (
        <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={ScreenOptions}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )
}

export default Navigation

