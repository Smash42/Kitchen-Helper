import { Link, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { ImageBackground, View } from "react-native";
import MealCard from "../components/MealCard";
import { FavoriteContent } from "../context/FavoriteContent";
import { mealData } from "../data/mealData";
const background = require("../../assets/images/bgocean.png");

const details = () => {
  const { id } = useLocalSearchParams();

  const { Favorites, onToggleFavorite } = useContext(FavoriteContent);
  const mealId = Number(Array.isArray(id) ? id[0] : id);
  const isFavorite = Favorites.some((m) => m.id === mealId);

  const meal = mealData.find((m) => m.id === mealId);

  if (!meal) {
    return (
      <Link
        href={"/(tabs)/meals"}
        className="text-xl font-bold mt-10 text-blue-600"
      >
        Back to Meals
      </Link>
    );
  }

  return (
    <ImageBackground source={background} className="flex-1" resizeMode="cover">
      <View className="flex-1">
        <MealCard
          meal={meal}
          onPress={() => {}}
          onToggleFavorite={() => onToggleFavorite(meal)}
          isFavorite={isFavorite}
        ></MealCard>

        <Link
          href={"/(tabs)/meals"}
          className="text-xl font-bold mt-10 text-link"
        >
          {" "}
          Back to Meals
        </Link>
        <Link
          href={"/(tabs)/favorites"}
          className="text-xl font-bold mt-10 text-link "
        >
          {" "}
          Favorited Meals
        </Link>
      </View>
    </ImageBackground>
  );
};

export default details;
