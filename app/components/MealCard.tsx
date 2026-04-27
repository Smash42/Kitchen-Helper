import * as Haptics from "expo-haptics";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Meal } from "../../data/mealData";
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
        onPress={async () => {
          if (isFavorite) {
            await Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Warning,
            );
          } else {
            await Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Success,
            );
          }
          onToggleFavorite();
        }}
        className="absolute top-8 right-5 z-50 bg-red-300 p-1 mt-5 shadow-lg p-2 rounded-full"
      >
        <Image source={isFavorite ? heart : heartOutline} />
      </TouchableOpacity>
      <ScrollView>
        <Text className="text-center text-5xl mt-20 text-title ">
          {" "}
          Kitchen Helper
        </Text>
        {meal.image && <Image source={{ uri: meal.image }} />}
        <Text className="text-center text-3xl mt-5 font-bold text-meals ">
          {meal.title}
        </Text>

        <Text className="text-center text-black text-xl text-yellow-100">
          {" "}
          {meal.meatType} - {meal.cookingStyle}{" "}
        </Text>
        <Text className=" text-2xl text-center mt-5 font-semibold text-subtitle">
          {" "}
          Ingredients
        </Text>
        <View className="mt-4 px-4">
          {meal.ingredients?.length > 0 ? (
            meal.ingredients.map((item, index) => (
              <Text key={index} className="text-white text-lg mb-1">
                • {item}
              </Text>
            ))
          ) : (
            <Text className="text-center text-white">
              Ingredients not available
            </Text>
          )}
        </View>
        <Text className="text-2xl text-center mt-5 font-semibold text-subtitle">
          {" "}
          Instructions
        </Text>
        <Text className="text-xl p-2 text-white"> {meal.instructions}</Text>
      </ScrollView>
    </View>
  );
};

export default MealCard;
