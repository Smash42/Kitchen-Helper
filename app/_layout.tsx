import { FavoritesProvider } from "@/context/FavoriteContent";
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="meal/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="drink/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="(Meals)" options={{ headerShown: false }} />
        <Stack.Screen
          name="components/MealCard"
          options={{ headerShown: false }}
        />
      </Stack>
    </FavoritesProvider>
  );
}
