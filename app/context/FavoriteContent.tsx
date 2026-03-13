import { createContext, useState } from "react";
import { Meal } from "../data/mealData";

interface FavoriteContentProps {
  Favorites: Meal[];
  toggleFavorite: (meal: Meal) => void;
}

export const FavoriteContent = createContext<FavoriteContentProps>({
  Favorites: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider = () => {
  const [Favorites, setFavorites] = useState<Meal[]>([]);

  const toggleFavorite = (meal: Meal) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.id === meal.id);

      if (exists) {
        return prev.filter((m) => m.id !== meal.id);
      }

      return [...prev, meal];
    });
  };

  return (
    <FavoriteContent.Provider
      value={{ Favorites, toggleFavorite }}
    ></FavoriteContent.Provider>
  );
};
