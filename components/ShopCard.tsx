import React from 'react';
import { Text, ImageBackground} from 'react-native';

export default function ShopCard(){
        return(
           <ImageBackground
           source={{uri : "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"}}
           style={{
               height:130,
               width:230,
               marginRight:20,
               borderRadius:10,
               marginBottom:40,
               opacity:0.7,
               backgroundColor:"#000",
               marginLeft:3,
               padding:12,
               marginTop:20
           }}
           >
               <Text style={{
                   fontFamily:"Bold",
                   color:"#FFF",
                   fontSize:15
               }}>Zara Furniture World</Text>
               <Text style={{
                   fontFamily:"Bold",
                   color:"#FFF",
                   fontSize:12
               }}>Get 25% OFF</Text>
           </ImageBackground>
        )
}