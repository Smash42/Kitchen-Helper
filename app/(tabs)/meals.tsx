import { Link } from "expo-router";
import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { mealData } from "../data/mealData";
const background = require("../../assets/images/bgocean.png");

const Meals = () => {
  return (
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <ScrollView>
        <View className="flex-1">
          <Text className="text-5xl mt-20 text-title text-center">
            {" "}
            Kitchen Helper
          </Text>
          <Text className="text-3xl mt-5 text-subtitle text-center">Meals</Text>
          <Text className="text-2xl mt-5 text-white p-2">
            {" "}
            Select a meal from below to see the respective ingredients and
            instructions
          </Text>
        </View>
        <View className="p-2 flex-2">
          {mealData.map((meal) => (
            <Link key={meal.id} href={`/meal/${meal.id}`} className="mt-5">
              <Text className="text-2xl text-meals p-2">{meal.title}: </Text>
              <Text className="text-yellow-100 text-lg">
                {meal.meatType} - {meal.cookingStyle}
              </Text>
            </Link>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Meals;
