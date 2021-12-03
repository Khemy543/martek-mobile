import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import SliderItem from "../components/SliderItem";
import SwiperComponent from "../components/SwiperComponents";

const styles = StyleSheet.create({
  myStarStyle: {
    color: "#000",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
});

export default function ProductDetails(props:any) {
  const { navigation } = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`bg-white px-2`}>
      <View
        style={tw`flex flex-row w-full justify-between mt-6 items-center border-b border-gray-200 pb-1`}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={tw`w-12 h-10`}
            source={require("../assets/img/martek.png")}
          />
        </View>
        <View>
            <Icon name="shopping-cart"/>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 340,
          width: "100%",
          marginTop:5
        }}
      >
        <SwiperComponent />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          key="1"
          style={{
            width: "65%",
          }}
        >
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 18,
              color: "#4f4a4a",
            }}
          >
            Autobe best Chair
          </Text>
        </View>
        <View
        key="2"
          style={{
            width: "35%",
          }}
        >
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 9,
              color: "#4f4a4a",
            }}
          >
            Customers Rating
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <Icon name="star" style={styles.myStarStyle} />
            ))}

            <Text
              style={{
                fontSize: 8,
                fontFamily: "Bold",
                marginHorizontal: 5,
                paddingTop: 4,
                color: "#b3aeae",
              }}
            >
              84 Reviews
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontFamily: "Bold",
          fontSize: 16,
          color: "#b3aeae",
        }}
      >
        324.69 USD
      </Text>
      <Text
        style={{
          fontFamily: "Medium",
          fontSize: 14,
          lineHeight: 20,
          color: "#b3aeae",
          marginTop: 20,
        }}
      >
        Full sleeves short dress with three attractive colors and available in
        various sizes.
      </Text>

      <View style={tw`flex flex-row mt-5`}>
          <View style={tw`w-1/2 mr-1`}>
              <TouchableOpacity style={tw`w-full`}>
                  <View style={tw`w-full rounded-lg items-center py-2 bg-blue-500`}>
                      <Text style={tw`text-white font-bold text-lg`}>Add To Cart</Text>
                  </View>
              </TouchableOpacity>
          </View>
          <View style={tw`w-1/2 mr-1`}>
              <TouchableOpacity style={tw`w-full`}>
                  <View style={tw`w-full rounded-lg items-center py-2 bg-red-500`}>
                      <Text style={tw`text-white font-bold text-lg`}>Buy Now</Text>
                  </View>
              </TouchableOpacity>
          </View>
      </View>

      <View style={tw`flex flex-row w-full items-center mt-10`}>
        <Text style={[{ fontFamily: "Bold" }, tw`text-gray-900 text-xl`]}>
          Related Items
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SliderItem navigation={navigation} key="1"/>
        <SliderItem navigation={navigation} key="2"/>
        <SliderItem navigation={navigation} key="3"/>
      </ScrollView>
    </ScrollView>
  );
}
