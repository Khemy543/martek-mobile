import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import SliderItem from "../../components/SliderItem";
import AdsItem from "../../components/AdsItem";
import ShopCard from "../../components/ShopCard";
import ProductCard from "../../components/ProductCard";

export default function HomePage(props:any) {

    const { navigation } = props

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`bg-white px-4`}>
      <View
        style={tw`flex flex-row justify-between w-full mt-6 items-center border-b border-gray-200 pb-1`}
      >
        <View>
          <Image
            style={tw`w-10 h-10 rounded-full`}
            source={{
              uri: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </View>
        <View>
          <Image
            style={tw`w-12 h-10`}
            source={require("../../assets/img/martek.png")}
          />
        </View>
        <View>
            <Icon name="shopping-cart"/>
        </View>
      </View>

      <View style={tw`flex flex-row items-center w-full my-3`}>
        <View
          style={tw`flex flex-row items-center w-5/6 bg-white px-2 h-10 rounded shadow-md`}
        >
          <Icon name="search" size={22} color="#4f4a4a" />
          <TextInput
            placeholder="Search products and shops"
            style={tw`font-medium px-2 text-sm w-full`}
          />
        </View>
        <View
          style={tw`items-center w-1/6 bg-white ml-2 rounded justify-center`}
        >
          <Icon name="search" size={22} color="#4f4a4a" />
        </View>
      </View>

      <View style={tw`flex flex-row w-full items-center`}>
        <Text style={[{ fontFamily: "Bold" }, tw`text-gray-900 text-xl`]}>
          Modern
        </Text>
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 5,
            backgroundColor: "#4f4a4a",
          }}
        ></View>
        <Text style={[{ fontFamily: "Bold" }, tw`text-xs`]}>
          Good Quality items
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SliderItem navigation={navigation}/>
        <SliderItem navigation={navigation}/>
        <SliderItem navigation={navigation}/>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Bold",
            color: "#4f4a4a",
            fontSize: 20,
          }}
        >
          New Arrivals
        </Text>
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: "#4f4a4a",
            marginHorizontal: 4,
          }}
        ></View>
        <Text
          style={{
            fontFamily: "Bold",
            fontSize: 10,
            color: "#4f4a4a",
          }}
        >
          Good Quality items
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AdsItem />
        <AdsItem />
        <AdsItem />
      </ScrollView>

      <Text
        style={{
          marginTop: 30,
          color: "#4f4a4a",
          fontSize: 18,
          fontFamily: "Bold",
        }}
      >
        Best Sellers
      </Text>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </ScrollView>


      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>

      
    </ScrollView>
  );
}
