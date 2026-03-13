import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Meal } from "../data/mealData";
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
    <View className="relative flex-1">
      {/*Favorite */}
      <TouchableOpacity
        onPress={onToggleFavorite}
        className="absolute top-8 right-6 z-50 bg-red-500 p-1"
      >
        <Image source={isFavorite ? heart : heartOutline} />
      </TouchableOpacity>
      <ScrollView>
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
        <Text className="text-black text-xl p-2 text-white ">
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
      </ScrollView>
    </View>
  );
};

export default MealCard;
