import { fetchDrinks } from "@/services/api";
import useFetch from "@/services/useFetch";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { useState } from "react";
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

export default function Drinks() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const {
    data: drinks,
    loading,
    error,
  } = useFetch(() => fetchDrinks({ query: query || "a" }), [query]);

  return (
    <GestureHandlerRootView>
      <ImageBackground
        source={background}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View className="flex-1 justify-center">
          <Text className="text-5xl text-title text-center mt-20 ">
            Kitchen Helper
          </Text>
          <Text className="text-3xl mt-5 text-subtitle text-center">
            {" "}
            Drinks
          </Text>
          <Text className="text-xl mt-5 text-white text-center">
            {" "}
            Search for Drink ideas to pair with your meals
          </Text>
          <Text> </Text>

          <TextInput
            placeholder="Search Drinks..."
            placeholderTextColor="#ccc"
            value={query}
            onChangeText={setQuery}
            className="bg-emerald-600 rounded-xl p-3 text-lg width-80 self-center mb-5"
          />
          {loading && <ActivityIndicator size="large" color="#ffffff" />}
          {error && <Text className="text-red-500 mt-5">{error.message}</Text>}
          {!loading && drinks?.length === 0 && (
            <Text className="text-white mt-5 text-2xl">No drinks found 🍹</Text>
          )}
          <FlatList
            data={drinks}
            keyExtractor={(item) => item.idDrink}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 100 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <Pressable
                onPress={async () => {
                  router.push({
                    pathname: "/drink/[id]",
                    params: { id: item.idDrink },
                  });
                  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
                className="bg-white/10 m-2 p-3 rounded-xl flex-1"
              >
                <Image
                  source={{ uri: item.strDrinkThumb }}
                  className="w-full h-32 self-center mb-2 rounded-lg shadow-xl"
                />

                <Text className="text-white font-bold text-lg text-center">
                  {item?.strDrink ? `${item.strDrink}` : ""}
                </Text>
                <Text className="text-yellow-200 text-sm text-center">
                  {item.strCategory} • {item.strAlcoholic}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}
