import { ScrollView, Text, View } from "react-native";
const background = require("../../assets/images/bgocean.png");

const cilantroChicken = () => {
  return (
    <ScrollView>
      <View className="flex-1 item-center">
        <Text className="text-5xl text-black text-center mt-20">
          Kitchen Helper
        </Text>
        <Text className="text-black text-3xl text-center mt-5">
          Cilantro Lime Chicken:
        </Text>
        <Text className="text-black text-2xl text-center mt-5">
          {" "}
          Ingredients:
        </Text>
        <Text className="text-black text-xl">
          {" "}
          List of Ingredients. Not centered - Chicken Breast - 2 Limes - 1 Tbsp
          Garlic - 1 Tbsp Honey - 3 Tbsp Avacado Oil - 1 Cup Water - Panko -
          Cucumber - Cabbage - Cilantro
        </Text>
        <Text className="text-black text-2xl text-center mt-5">
          {" "}
          Instructions:
        </Text>
        <Text className="text-black text-xl">
          {" "}
          Listed Instructions. Not centered {}- Cut Chicken in half and Cutlet
          with Panko - Cook Chicken in Air Fryer, 17 mins at 350. Flipping
          halway - Thihly slice Cucumber and Cabbage, place into a large bowl -
          Squeeze Lemon juice, and half the honey onto Cucumbers/Cabbage and mix
          - In a Saute Pan add: Water, Garlic, remaining Honey, Lime Juice,
          Cilantro - Once Chicken is cooked, place in pan to absorb the sauce
          -Place Chicken on Ciabatta bread with Cucumber/Cabbage Mix.
        </Text>
      </View>
    </ScrollView>
  );
};

export default cilantroChicken;
