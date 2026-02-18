import { ImageBackground, Text, View } from "react-native";
const background = require("../../assets/images/oceanFade.png");

const favorites = () => {
  return (
    <View className="flex-1 item-center">
      <ImageBackground
        source={background}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Text className="text-5xl text-white text-center mt-20">
          Kitchen Helper
        </Text>
        <Text className="text-red-200 text-3xl text-center mt-5">
          Your Favorited Meals:
        </Text>
      </ImageBackground>
    </View>
  );
};

export default favorites;
