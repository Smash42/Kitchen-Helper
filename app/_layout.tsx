import { FavoritesProvider } from "@/context/FavoriteContent";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
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
    </GestureHandlerRootView>
  );
}
