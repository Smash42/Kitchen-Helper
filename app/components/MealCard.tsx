import { Meal } from "@/data/mealMapper";
import * as Haptics from "expo-haptics";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
    <GestureHandlerRootView>
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
        {meal.image && <Image source={{ uri: meal.image }} />}
        <Text className="text-white text-center text-3xl mt-20 font-bold text-meals ">
          {meal.title}
        </Text>

        <Text className="text-center text-black text-xl text-yellow-100">
          {" "}
          {meal.meatType} • {meal.cookingStyle}{" "}
        </Text>
        {meal.image && (
          <Image
            source={{ uri: meal.image }}
            className="w-60 h-40 rounded-lg mb-1 items-center justify-center self-center mt-5 shadow-2xl"
          />
        )}
        <ScrollView className="mt-3 shadow-2xl">
          <Text className=" text-2xl text-center mt-5 font-semibold text-subtitle">
            {" "}
            Ingredients
          </Text>
          <View className="mt-3 px-4 shadow-xl">
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
          <Text className="mt-4 px-4 text-white text-lg shadow-xl">
            {meal.instructions || "Instructions not available"}
          </Text>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default MealCard;
