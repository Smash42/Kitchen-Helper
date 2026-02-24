import { ScrollView, Text, View } from "react-native";
import { Meal } from "../data/mealData";
const background = require("../../assets/images/oceanFade.png");

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
      <View className="flex-1">
        <Text className="text-center text-5xl mt-20 text-title ">
          {" "}
          Kitchen Helper
        </Text>
        <Text className="text-center text-3xl mt-5 font-bold text-meals ">
          {meal.title}
        </Text>

        <Text className="text-center text-black text-xl text-yellow-100">
          {" "}
          {meal.meatType} - {meal.cookingStyle}{" "}
        </Text>
        <Text className="text-black text-2xl text-center mt-5 font-semibold text-subtitle">
          {" "}
          Ingredients:
        </Text>
        <Text className="text-black text-xl p-2 text-white">
          {meal.ingredients}
        </Text>

        <Text className="text-black text-2xl text-center mt-5 font-semibold text-subtitle">
          {" "}
          Instructions
        </Text>
        <Text className="text-black text-xl p-2 text-white">
          {" "}
          {meal.instructions}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MealCard;
