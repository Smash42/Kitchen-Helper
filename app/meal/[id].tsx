import { Text, View } from "react-native";

const details = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Id. </Text>
      <Text>
        {" "}
        Meal Title Category labels Ingredients list Cooking instructions
        Buttons: Add to Favorites, Archive
      </Text>
    </View>
  );
};

export default details;
