import { mapMealToMeal } from "@/data/mealMapper";
import { fetchMeals } from "@/services/api";
import useFetch from "@/services/useFetch";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const background = require("../../assets/images/bgocean.png");

const Meals = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(
    () => fetchMeals({ query: query || "a" }),
    [query],
  );
  const router = useRouter();

  const mappedMeals = data?.map(mapMealToMeal) || [];

  return (
    <GestureHandlerRootView>
      <ImageBackground
        source={background}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View className="flex-1">
          <Text className="text-5xl mt-20 text-title text-center ">
            {" "}
            Kitchen Helper
          </Text>
          <Text className="text-3xl mt-5 text-subtitle text-center">Meals</Text>
          <Text className="text-xl mt-5 text-white text-center">
            {" "}
            Search for a meal to get recipe details
          </Text>
          <Text> </Text>
          <TextInput
            placeholder="Search Meals..."
            placeholderTextColor="#ccc"
            value={query}
            onChangeText={setQuery}
            className="bg-emerald-600 rounded-xl p-3 text-lg width-80 self-center mb-5"
          />
          {loading && <ActivityIndicator size="large" color="#ffffff" />}
          {error && <Text className="text-red-500 mt-5">{error.message}</Text>}
          {!loading && mappedMeals?.length === 0 && (
            <Text className="text-white mt-5 text-center text-2xl">
              No meals found 🍽️{" "}
            </Text>
          )}

          {/* Meal List */}

          <FlatList
            data={mappedMeals}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 100 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <Pressable
                onPress={async () => {
                  router.push({
                    pathname: "/meal/[id]",
                    params: { id: item.id.toString() },
                  });
                  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
                className="bg-white/10 m-2 p-3 rounded-xl flex-1"
              >
                {item.image && (
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-32 rounded-lg mb-2 self-center shadow-xl"
                  />
                )}

                <Text className="text-white font-bold text-lg text-center">
                  {item.title}
                </Text>

                <Text className="text-yellow-200 text-sm text-center">
                  {item.meatType} • {item.cookingStyle}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

export default Meals;
