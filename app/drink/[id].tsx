import { fetchDrinkById } from "@/services/api";
import useFetch from "@/services/useFetch";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
const background = require("../../assets/images/bgocean.png");

const details = () => {
  const { id } = useLocalSearchParams();

  const {
    data: drink,
    loading,
    error,
  } = useFetch(() => fetchDrinkById(Array.isArray(id) ? id[0] : id), [id]);
  if (loading) return <Text className="text-white mt-5">Loading...</Text>;
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
        <Text className="text-5xl mt-20 text-title text-center">
          {" "}
          Kitchen Helper
        </Text>
        <Text className="text-3xl mt-5 text-subtitle text-center">
          {drink.strDrink}
        </Text>
        <Image
          source={{ uri: drink.strDrinkThumb }}
          className="w-40 h-40 self-center mt-5 rounded-lg shadow-lg"
        />
        <ScrollView className="rounded-lg p-4">
          <Text className="text-black text-2xl text-center mt-5 font-semibold text-subtitle">
            {" "}
            Ingredients:
          </Text>

          {ingredients.length > 0 ? (
            <View>
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
          <Text className="text-black text-xl p-2 text-white ">
            {" "}
            {drink.strInstructions}
          </Text>
        </ScrollView>

        <Link
          href={"/(tabs)/drinks"}
          className="text-xl font-bold mt-10 mb-5 text-link text-center"
        >
          {" "}
          Back to Drinks
        </Link>
      </View>
    </ImageBackground>
  );
};

export default details;
