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
        <Text className="text-4xl mt-20"> Kitchen Helper</Text>
        <Text className="text-2xl mt-5">{meal.title}</Text>

        <Text>
          {" "}
          {meal.meatType} - {meal.cookingStyle}{" "}
        </Text>
        <Text> Ingredients:</Text>
        <Text> {meal.ingredients} </Text>

        <Text> Instructions</Text>
        <Text> {meal.instructions}</Text>
      </View>
    </ScrollView>
  );
};

export default MealCard;
