import { mapMealToMeal } from "@/data/mealMapper";
import { fetchMealById } from "@/services/api";
import useFetch from "@/services/useFetch";
import { Link, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { ImageBackground, View } from "react-native";
import { FavoriteContent } from "../../context/FavoriteContent";
import MealCard from "../components/MealCard";
const background = require("../../assets/images/bgocean.png");

const details = () => {
  const { id } = useLocalSearchParams();

  const { Favorites, onToggleFavorite } = useContext(FavoriteContent);
  const mealId = Number(Array.isArray(id) ? id[0] : id);
  const isFavorite = Favorites.some((m) => m.id === mealId);
  const { data, loading, error } = useFetch(() => fetchMealById(id as string));

  if (!data) return null;

  // ✅ Convert API → your model
  const mappedMeal = mapMealToMeal(data);

  if (!mappedMeal) {
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
          meal={mappedMeal}
          onPress={() => {}}
          onToggleFavorite={() => onToggleFavorite(mappedMeal)}
          isFavorite={isFavorite}
        ></MealCard>

        <Link
          href={"/(tabs)/meals"}
          className="text-xl font-bold mt-7 text-link text-center"
        >
          Back to Meals
        </Link>
        <Link
          href={"/(tabs)/favorites"}
          className="text-xl font-bold m-3 text-link text-center "
        >
          Favorited Meals
        </Link>
      </View>
    </ImageBackground>
  );
};

export default details;
