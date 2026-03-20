import { Link } from "expo-router";
import { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { mealData } from "../data/mealData";
const sharkchef = require("../../assets/images/Shark-Chef-small.png");
const background = require("../../assets/images/bgocean.png");

const search = () => {
  const [search, setSearch] = useState("");

  const filteredMeals = mealData.filter((meal) =>
    meal.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ImageBackground
      source={background}
      className="flex-1 z-0"
      resizeMode="cover"
    >
      <View className="flex-1 items-center">
        <Text className="text-5xl text-title text-center font-bold mt-20">
          Kitchen Helper
        </Text>
        <Image
          source={sharkchef}
          className="mx-auto justify-center mt-50"
        ></Image>

        {filteredMeals.map((meal) => (
          <Link key={meal.id} href={`/meal/${meal.id}`} className="mt-5">
            <Text className="text-2xl text-meals p-2">{meal.title}: </Text>
            <Text className="text-yellow-100 text-lg">
              {meal.meatType} - {meal.cookingStyle}
            </Text>
          </Link>
        ))}
      </View>
    </ImageBackground>
  );
};

export default search;
