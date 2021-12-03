import React from 'react'
import {Image,StyleSheet,Text,View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper:{},
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    },

})

export default function SwiperComponent() {
        return(
            <Swiper
            style={styles.wrapper}
            dotStyle={tw`w-2 h-2`}
            activeDotColor="#FFF"
            activeDotStyle={tw`w-2 h-2`}
           
           >
               <View style={styles.slide} key="1">
                   <Image
                     source={{uri:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
                     style={{height:"100%",width:"100%", borderRadius:10}}
                    />

               </View>
               <View style={styles.slide} key="2">
                   <Image
                     source={{uri:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
                     style={{height:"100%",width:"100%", borderRadius:10}}
                    />

               </View>
               <View style={styles.slide} key="3">
                    <Image
                     source={{uri:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
                     style={{height:"100%",width:"100%", borderRadius:10}}
                    />

               </View>
            
            </Swiper>
        );
} 