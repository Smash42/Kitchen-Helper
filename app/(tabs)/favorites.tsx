import { ImageBackground, Text, View } from "react-native";
const background = require("../../assets/images/oceanFade.png");

const favorites = () => {
  return (
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <View className="flex-1 items-center">
        <Text className="text-5xl text-title text-center mt-20 items-center">
          Kitchen Helper
        </Text>
        <Text className="text-red-200 text-3xl text-center mt-5">
          Your Favorited Meals:
        </Text>
      </View>
    </ImageBackground>
  );
};

export default favorites;
