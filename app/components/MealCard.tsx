import { ScrollView, Text, View } from "react-native";
import { Meal } from "../data/mealData";

interface MealCardProps {
  meal: Meal;
  onPress: () => void;
  onToggleFavorite: () => void;
}

const MealCard: React.FC<MealCardProps> = ({
  meal,
  onPress,
  onToggleFavorite,
}) => {
  return (
    <ScrollView>
      <View className="flex-1 justify-center item-center">
        <Text className="text-5xl mt-20"> Kitchen Helper</Text>
        <Text className="text-3xl mt-5">{meal.title}</Text>

        <Text className="text-black text-xl">
          {" "}
          {meal.meatType} - {meal.cookingStyle}{" "}
        </Text>
        <Text className="text-black text-2xl text-center mt-5">
          {" "}
          Ingredients:
        </Text>
        <Text className="text-black text-xl">{meal.ingredients}</Text>

        <Text className="text-black text-2xl text-center mt-5">
          {" "}
          Instructions
        </Text>
        <Text className="text-black text-xl"> {meal.instructions}</Text>
      </View>
    </ScrollView>
  );
};

export default MealCard;
