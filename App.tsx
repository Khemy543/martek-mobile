import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigations'

export default function App() {
  const [isFontLoaded , setIsFontLoaded] = useState(false);

  useEffect(() => {
    
    async function loadFonts() {
      await Font.loadAsync({
        'Bold' : require('./assets/fonts/Montserrat-ExtraBold.otf'),
        'Medium' : require('./assets/fonts/Montserrat-Medium.otf'),
        'Regular' : require('./assets/fonts/Montserrat-Regular.otf'),
      });
      setIsFontLoaded(true)
    }  

    loadFonts();

  },[])

  return (
    (isFontLoaded) ? (<AppNavigator />) : (<AppLoading />)
  );
}
