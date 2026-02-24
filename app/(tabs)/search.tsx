import { Image, ImageBackground, Text, View } from "react-native";
const sharkchef = require("../../assets/images/Shark-Chef-small.png");
const background = require("../../assets/images/oceanFade.png");

const search = () => {
  return (
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <View className="flex-1 items-center bg-amber-200">
        <Text className="text-5xl text-title text-center font-bold mt-20">
          Kitchen Helper
        </Text>
        <Text></Text>
        <Image
          source={sharkchef}
          className="mx-auto justify-center mt-50"
        ></Image>
        <Text className="text-xl"> Search Meal Function coming soon</Text>
      </View>
    </ImageBackground>
  );
};

export default search;
