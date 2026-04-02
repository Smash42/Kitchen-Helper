import { createContext, ReactNode, useState } from "react";
import { Meal } from "../data/mealData";

interface FavoriteContentProps {
  Favorites: Meal[];
  onToggleFavorite: (meal: Meal) => void;
}

export const FavoriteContent = createContext<FavoriteContentProps>({
  Favorites: [],
  onToggleFavorite: () => {},
});

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [Favorites, setFavorites] = useState<Meal[]>([]);

  const onToggleFavorite = (meal: Meal) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.id === meal.id);

      if (exists) {
        return prev.filter((m) => m.id !== meal.id);
      }

      return [...prev, meal];
    });
  };

  return (
    <FavoriteContent.Provider value={{ Favorites, onToggleFavorite }}>
      {children}
    </FavoriteContent.Provider>
  );
};
