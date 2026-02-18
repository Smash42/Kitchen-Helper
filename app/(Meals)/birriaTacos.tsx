import { Text, View } from "react-native";
const background = require("../../assets/images/bgocean.png");

const birriaTaco = () => {
  return (
    <View className="flex-1 justify-center item-center">
      <Text className="text-5xl text-black text-center">Kitchen Helper</Text>
      <Text className="text-black text-3xl text-center mt-5">
        Birria Tacos:
      </Text>
      <Text className="text-black text-2xl text-center mt-5">
        {" "}
        Ingredients:
      </Text>
      <Text className="text-black text-xl"> </Text>
      <Text className="text-black text-2xl text-center mt-5">
        {" "}
        Instructions:
      </Text>
    </View>
  );
};

export default birriaTaco;
