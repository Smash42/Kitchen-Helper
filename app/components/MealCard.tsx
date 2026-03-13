import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Meal } from "../data/mealData";
const background = require("../../assets/images/oceanFade.png");
const heart = require("../../assets/icons/heart.png");
const heartOutline = require("../../assets/icons/heartOutline.png");

interface MealCardProps {
  meal: Meal;
  onPress: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
}

const MealCard: React.FC<MealCardProps> = ({
  meal,
  onPress,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <ScrollView>
      <View>
        {/*Favorite */}
        <TouchableOpacity
          onPress={onToggleFavorite}
          className="absolute right-6 top-20"
        >
          <Image source={isFavorite ? heart : heartOutline} />
        </TouchableOpacity>
        <Text className="text-center text-5xl mt-20 text-title ">
          {" "}
          Kitchen Helper
        </Text>
        <Text className="text-center text-3xl mt-5 font-bold text-meals ">
          {meal.title}
        </Text>

        <Text className="text-center text-black text-xl text-yellow-100">
          {" "}
          {meal.meatType} - {meal.cookingStyle}{" "}
        </Text>
        <Text className="text-black text-2xl text-center mt-5 font-semibold text-subtitle">
          {" "}
          Ingredients:
        </Text>
        <Text className="text-black text-xl p-2 text-white">
          {meal.ingredients.map((item, index) => (
            <Text key={index}>- {item} </Text>
          ))}
        </Text>

        <Text className="text-black text-2xl text-center mt-5 font-semibold text-subtitle">
          {" "}
          Instructions
        </Text>
        <Text className="text-black text-xl p-2 text-white">
          {" "}
          {meal.instructions}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MealCard;
