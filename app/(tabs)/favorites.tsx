import { Link } from "expo-router";
import { useContext } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { FavoriteContent } from "../context/FavoriteContent";
const background = require("../../assets/images/bgocean.png");

const favorites = () => {
  const { Favorites } = useContext(FavoriteContent);

  return (
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <View className="flex-1 items-center">
        <Text className="text-5xl text-title text-center mt-20 items-center">
          Kitchen Helper
        </Text>
        <Text className="text-red-200 text-3xl text-center mt-5">
          Your Favorited Meals:
        </Text>
        <View>
          {Favorites.map((meal) => (
            <Link
              key={meal.id}
              href={`/meal/${meal.id}`}
              className="mt-5"
              asChild
            >
              <TouchableOpacity>
                <Text className="text-3xl mt-5 text-center text-white">
                  {" "}
                  {meal.title}
                </Text>
                <Text className="text-yellow-100 text-lg text-center">
                  {meal.meatType} - {meal.cookingStyle}
                </Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default favorites;
