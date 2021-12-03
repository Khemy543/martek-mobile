import React from 'react'
import {Text,View,Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

export default function SliderItem(props:any) {

    const { navigation } = props
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('ProductDetails')}
            style={[tw`mt-5 bg-white rounded-sm mt-5 mb-2 mr-6`,{ width:200, height:300, elevation:2 }]}
        >
            <Image 
                source={{
                    uri : 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                }}
                style={{width:"100%", height:160, borderRadius:10, resizeMode:"cover"}}
            />
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginVertical:10
            }}>
                <Text style={{
                    fontFamily:"Bold",
                    color:"#4f4a4a",
                    fontSize:18
                }}>
                    Girls Bag
                </Text>
                <View style={{
                    height:4,
                    width:4,
                    borderRadius:4,
                    backgroundColor:"red",
                    marginHorizontal:4
                }}>

                </View>
                <Text style={{
                    color:"red",
                    fontSize:12,
                    fontFamily:"Bold"
                }}>
                    New
                </Text>
            
            </View>
            <Text numberOfLines={2} style={{
                fontSize:14,
                color:"#4f4a4a",
                fontFamily:"Regular"
            }}>
                Full sleeves short dress with three attractive colors and and available in various sizes.
            </Text>


                <View style={{
                    flexDirection:"row",
                    marginTop:5,
                    alignItems:"center",
                    width:"100%"
                }}>
                    <View style={{
                        width:"80%"
                    }}>
                        <Text style={{
                            fontSize:15,
                            fontFamily:"Bold"
                        }}>GHS 767.69</Text>
                    </View>
                    <View style={{
                        width:"20%"
                    }}>
                       {/*  <Image
                        source={require('../images/add.png')}
                        style={{
                            alignSelf:"flex-end",
                            width:25,
                            height:25
                        }}
                        /> */}
                    </View>
                </View>
        </TouchableOpacity>
    )
}
