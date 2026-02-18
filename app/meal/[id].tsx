import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { mealData } from "../data/mealData";

const details = () => {
  const { id } = useLocalSearchParams();

  const meal = mealData.find((m) => m.id === id);

  if (!meal) {
    return <Text> Meal not found</Text>;
  }

  return (
    <ScrollView className="bg-teal-200">
      <View>
        <Text className="flex-1 mt-20 text-4xl font-bold text-center">
          {meal.title}
        </Text>
        <Text className="flex-1 mt-5 text-xl text-center">
          Buttons: Add to Favorites
        </Text>
        <Text className="flex-1 mt-10 text-2xl font-bold text-center">
          {" "}
          Ingredients
        </Text>
        <Text className="p-2"> {meal.ingredients}</Text>
        <Text className="flex-1 mt-10 text-2xl font-bold text-center">
          Instructions:
        </Text>
        <Text className="p-2"> {meal.instructions}</Text>
        <Link
          href={"/(tabs)/meals"}
          className="text-xl font-bold mt-10 text-blue-600"
        >
          {" "}
          Back to Meals
        </Link>
      </View>
    </ScrollView>
  );
};

export default details;
