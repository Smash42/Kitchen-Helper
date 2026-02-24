import { Link, useRouter } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
const background = require("../../assets/images/bgocean.png");
const sharkIcon = require("../../assets/images/Shark-Chef-small.png");

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={background}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Text className="text-5xl text-title text-center mt-20 font-bold">
          Kitchen Helper
        </Text>

        <Text className="text-2xl text-white mt-5 mb-5">
          {" "}
          The easiest way to plan and make dinner! Stop making the same boring
          meals every week, and instead use Kitchen Helper to help spice up your
          dinner life!{" "}
        </Text>
        <Image source={sharkIcon} className="mx-auto"></Image>

        <Text></Text>
        <Text className="text-xl text-white mt-5 mb-5">
          {" "}
          Use the Tabs below to view available meals, your favorites, or search
        </Text>

        <Link href="/favorites" className="text-link m-5 text-xl text-center">
          {" "}
          Your Favorite Meals
        </Link>
        <Link href="/meals" className="text-link m-3 text-xl text-center">
          {" "}
          Meal Options
        </Link>
      </ImageBackground>
    </View>
  );
}
