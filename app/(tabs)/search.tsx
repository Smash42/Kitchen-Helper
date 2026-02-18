import { Image, Text, View } from "react-native";
const sharkchef = require("../../assets/images/Shark-Chef.png");

const search = () => {
  return (
    <View className="flex-1 items-center bg-amber-200">
      <Image source={sharkchef} resizeMode="center" className="m-0"></Image>
      <Text className="text-xl"> Search Function coming soon</Text>
    </View>
  );
};

export default search;
