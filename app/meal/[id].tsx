import { mapMealToMeal } from "@/data/mealMapper";
import { fetchMealById } from "@/services/api";
import useFetch from "@/services/useFetch";
import * as Haptics from "expo-haptics";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FavoriteContent } from "../../context/FavoriteContent";
import MealCard from "../components/MealCard";
const background = require("../../assets/images/bgocean.png");

const details = () => {
  const { id } = useLocalSearchParams();

  const { Favorites, onToggleFavorite } = useContext(FavoriteContent);
  const mealId = Number(Array.isArray(id) ? id[0] : id);
  const isFavorite = Favorites.some((m) => m.id === mealId);
  const { data, loading, error } = useFetch(() => fetchMealById(id as string));
  if (loading) return <ActivityIndicator size="large" color="#ffffff" />;
  if (error)
    return (
      <Text className="text-red-500 text-white mt-5"> {error.message}</Text>
    );

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

        <TouchableOpacity
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/(tabs)/meals");
          }}
          className="bg-emerald-100 p-2 rounded-xl mt-3 w-1/3 self-center shadow-xl"
        >
          <Text className="text-emerald-900 text-lg text-center font-semibold">
            Meals🍽️
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/(tabs)/favorites");
          }}
          className="bg-red-100 p-2 rounded-xl m-3 w-1/3 self-center shadow-xl"
        >
          <Text className="text-red-900 text-center text-lg font-semibold">
            ❤️ Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default details;
