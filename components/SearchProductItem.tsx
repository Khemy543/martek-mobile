import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function SearchProductItem() {
    return (
        <View style={tw`flex flex-row m-2 border border-gray-200 rounded-md overflow-hidden`}>
            <View style={tw`w-2/5`}>
                <Image 
                    style={styles.image}
                    source={{
                        uri : 'https://images.unsplash.com/photo-1604423231287-7b3ddea72cae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    }}
                /> 
            </View>
            <View style={[tw`w-3/5 p-2`, {flex:1}]}>
                <Text style={tw`font-normal text-lg`} numberOfLines={2}>Pencil and Pens bag for women</Text>
                <Text style={tw`font-bold text-xl`}>GHS 40.00</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image : {
        height: 150,
        resizeMode:"cover"
    }
})