import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

        <Text className="text-2xl text-white m-5">
          {" "}
          The easiest way to plan and make dinner! Stop making the same boring
          meals every week, and instead use Kitchen Helper to help spice up your
          dinner life!{" "}
        </Text>
        <Image
          source={sharkIcon}
          className="mx-auto rounded-lg shadow-2xl"
        ></Image>

        <Text></Text>
        <TouchableOpacity
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/(tabs)/meals");
          }}
          className="bg-emerald-600 p-4 rounded-xl mt-5 w-3/4 self-center shadow-2xl"
        >
          <Text className="text-white text-center items-center text-lg font-bold">
            Browse Meals 🍽️
          </Text>
        </TouchableOpacity>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity
          onPress={async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push("/(tabs)/favorites");
          }}
          className="bg-red-100 p-4 rounded-xl mt-5 w-3/4 self-center shadow-2xl"
        >
          <Text className="text-red-900 text-center text-lg font-bold">
            ❤️ View Favorites
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
