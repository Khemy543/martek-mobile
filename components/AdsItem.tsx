import React from 'react';
import {View,Image,Text} from 'react-native';

export default function AdsItem(){
        return(
           <View style={{
               flexDirection:"row",
               height:60,
               width:240,
               backgroundColor:"#fff",
               elevation:2,
               padding:6,
               marginVertical:5,
               marginRight:20,
               marginLeft:2,
               borderRadius:10
           }}> 
           <View>
               <Image
                source={{uri:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
                style={{
                    height:50,
                    width:60,
                    borderRadius:10
                }}
               />
           </View>

           <View style={{
               width:"65%",
               justifyContent:"flex-end",
               paddingHorizontal:10,
               height:"100%"
           }}>
               <Text numberOfLines={2} style={{
                   fontSize:12,
                   fontFamily:"Medium",

               }}>
                   Slakal sleeves short dress with three attractive colors
               </Text>
               <Text  style={{
                   fontSize:14,
                   fontFamily:"Bold",
               }}>
                   454.69
               </Text>

           </View>
           <View style={{
               width:"5%",
               justifyContent:"flex-end",
               height:"100%"
           }}>
               {/* <Image
                source={require('../images/add.png')}
                style={{
                    height:17,
                    width:17
                }}
               /> */}
           </View>

           </View>
        )
}