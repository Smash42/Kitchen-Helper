import { Link, useLocalSearchParams } from "expo-router";
import { ImageBackground, ScrollView, View } from "react-native";
import MealCard from "../components/MealCard";
import { mealData } from "../data/mealData";
const background = require("../../assets/images/oceanFade.png");

const details = () => {
  const { id } = useLocalSearchParams();

  const meal = mealData.find((m) => m.id === id);

  if (!meal) {
    return (
      <Link
        href={"/(tabs)/meals"}
        className="text-xl font-bold mt-10 text-blue-600"
      >
        Back to Meals
      </Link>
    );
  }

  return (
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <ScrollView>
        <View>
          <MealCard
            meal={meal}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
            onToggleFavorite={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></MealCard>

          <Link
            href={"/(tabs)/meals"}
            className="text-xl font-bold mt-10 text-link"
          >
            {" "}
            Back to Meals
          </Link>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default details;
