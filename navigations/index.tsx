import React from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreens"
import ProductDetails from '../screens/ProductDetails';


export default function Navigations(){

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{
                            headerShown:false
                        }}
                    />
                    <Stack.Screen 
                        name="ProductDetails"
                        component={ProductDetails}
                        options={{
                            headerShown:false
                        }}
                    />
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    )
}