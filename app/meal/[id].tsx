import { Link, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import MealCard from "../components/MealCard";
import { FavoriteContent } from "../context/FavoriteContent";
import { mealData } from "../data/mealData";
const background = require("../../assets/images/bgocean.png");

const details = () => {
  const { id } = useLocalSearchParams();
  const mealId = id;
  const { Favorites, toggleFavorite } = useContext(FavoriteContent);
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
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <ScrollView>
        <View className="flex-1">
          <MealCard
            meal={meal}
            onPress={() => {}}
            onToggleFavorite={() => toggleFavorite(meal)}
            isFavorite={isFavorite}
          ></MealCard>

          <Link
            href={"/(tabs)/meals"}
            className="text-xl font-bold mt-10 text-link"
          >
            {" "}
            Back to Meals
          </Link>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default details;
