import { fetchDrinks } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
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
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <View className="flex-1 justify-center">
        <Text className="text-5xl text-title text-center mt-20">
          Kitchen Helper
        </Text>
        <Text className="text-3xl mt-5 text-subtitle text-center"> Drinks</Text>
        <Text className="text-xl mt-5 text-white text-center">
          {" "}
          Search for Drink ideas to pair with your meals
        </Text>
        <Text> </Text>

        <TextInput
          placeholder="Search Drinks..."
          value={query}
          onChangeText={setQuery}
          className="bg-yellow-100 p-3 text-lg items-center justify-center width-80 self-center mb-5"
        />
        {loading && <Text className="text-white mt-5">Loading...</Text>}
        {error && <Text className="text-red-500 mt-5">{error.message}</Text>}
        {!loading && drinks?.length === 0 && (
          <Text className="text-white mt-5">No drinks found 🍹</Text>
        )}

        <FlatList
          data={drinks}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: `/drink/[id]`,
                  params: { id: item.idDrink },
                })
              }
            >
              <View className="text-center">
                <Text className="text-xl text-center font-medium text-white">
                  {" "}
                  {item?.strDrink ? `${item.strDrink}` : ""}
                  {item?.strCategory ? `- ${item.strCategory}` : ""}
                </Text>
                <Text> {} </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </ImageBackground>
  );
}
