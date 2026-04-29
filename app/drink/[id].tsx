import { fetchDrinkById } from "@/services/api";
import useFetch from "@/services/useFetch";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const background = require("../../assets/images/bgocean.png");

const details = () => {
  const { id } = useLocalSearchParams();

  const {
    data: drink,
    loading,
    error,
  } = useFetch(() => fetchDrinkById(Array.isArray(id) ? id[0] : id), [id]);
  if (loading) return <ActivityIndicator size="large" color="#ffffff" />;
  if (error)
    return (
      <Text className="text-red-500 text-white mt-5"> {error.message}</Text>
    );
  if (!drink) return <Text className="text-white mt-5">Drink not found</Text>;

  const getIngredients = (drink: any) => {
    const ingredients = [];
    for (let i = 1; i <= 18; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          ingredient: ingredient,
          measure: measure?.trim || "",
        });
      }
    }
    return ingredients;
  };
  const ingredients = getIngredients(drink);

  return (
    <ImageBackground source={background} className="flex-1" resizeMode="cover">
      <View className="flex-1">
        <Text className="text-white text-3xl mt-20 text-subtitle text-center">
          {drink.strDrink}
        </Text>
        <Text className="text-center text-black text-xl text-yellow-100">
          {" "}
          {drink.strCategory} • {drink.strAlcoholic}{" "}
        </Text>
        <Image
          source={{ uri: drink.strDrinkThumb }}
          className="w-40 h-40 self-center mt-5 rounded-lg shadow-2xl"
        />
        <ScrollView className="rounded-lg mt-5 shadow-2xl">
          <Text className="text-black text-2xl text-center mt-5 font-semibold text-subtitle">
            {" "}
            Ingredients
          </Text>

          {ingredients.length > 0 ? (
            <View className="shadow-xl">
              {ingredients.map((item, index) => (
                <Text
                  key={index}
                  className="text-black text-xl p-2 text-white "
                >
                  • {item.measure} {item.ingredient}
                </Text>
              ))}
            </View>
          ) : (
            <Text className="text-center text-white mt-2">
              Ingredients not available
            </Text>
          )}

          <Text className="text-black text-2xl text-center mt-5 font-semibold text-subtitle">
            {" "}
            Instructions
          </Text>
          <Text className="text-black text-xl p-2 text-white shadow-xl">
            {" "}
            {drink.strInstructions}
          </Text>
        </ScrollView>

        <TouchableOpacity
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/(tabs)/drinks");
          }}
          className="bg-emerald-600 p-2 rounded-xl m-3 w-1/3 self-center"
        >
          <Text className="text-white text-lg text-center font-bold">
            Drinks🍹
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default details;
