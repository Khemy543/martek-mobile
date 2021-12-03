import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "./AddProduct";
import Categories from "./Categories";
import HomePage from "./HomePage";
import Shops from "./Shops";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
            initialRouteName="HomePage"
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="AddProduct"
                component={AddProduct}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Shops"
                component={Shops}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerShown:false
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;