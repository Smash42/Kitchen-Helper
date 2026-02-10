import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Kitchen Helper</Text>

      <Link href="/favorites" />
      <Text> Category selections for dinners. Meat, Meal, Cook Style.</Text>
    </View>
  );
}
