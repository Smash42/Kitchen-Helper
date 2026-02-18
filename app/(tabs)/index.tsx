import SearchBar from "@/app/components/SearchBar";
import { Link, useRouter } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
const background = require("../../assets/images/bgocean.png");

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={background}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Text className="text-5xl text-white text-center mt-20">
          Kitchen Helper
        </Text>

        <Text className="text-2xl text-center text-blue-100 mt-5 mb-5">
          {" "}
          The easiest way to plan and make dinner! Stop making the same boring
          meals every week, and instead use Kitchen Helper to help spice up your
          dinner life!{" "}
        </Text>

        <Text> </Text>

        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="search for a dinner"
        />

        <Link href="/favorites" className="text-red-200 m-1 text-xl">
          {" "}
          Your Favorites
        </Link>
        <Text className="text-white m-1">
          {" "}
          Category selections for dinners: Meat, Meal, Cook Style.
        </Text>
      </ImageBackground>
    </View>
  );
}
