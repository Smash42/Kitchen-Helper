import { router } from "expo-router";
import { useContext } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { FavoriteContent } from "../../context/FavoriteContent";
const background = require("../../assets/images/bgocean.png");

const favorites = () => {
  const { Favorites } = useContext(FavoriteContent) as { Favorites: any[] };

  return (
    <ImageBackground source={background} style={{ flex: 1 }} resizeMode="cover">
      <View className="flex-1">
        <Text className="text-5xl text-title text-center mt-20">
          Kitchen Helper
        </Text>
        <Text className="text-red-200 text-3xl text-center mt-5">
          Your Favorited Meals:
        </Text>
        <View className="p-2 flex-2 justify-center">
          {Favorites.length === 0 ? (
            <Text className="text-white text-2xl mt-5 text-center">
              You haven't favorited any meals yet! Go to the Meals tab to find
              some.
            </Text>
          ) : (
            <FlatList
              data={Favorites}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={{ paddingBottom: 100 }}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: "/meal/[id]",
                      params: { id: item.id.toString() },
                    })
                  }
                  className="bg-white/10 m-2 p-3 rounded-xl flex-1"
                >
                  {item.image && (
                    <Image
                      source={{ uri: item.image }}
                      className="w-full h-32 rounded-lg mb-2"
                    />
                  )}

                  <Text className="text-white font-bold text-lg text-center">
                    {item.title}
                  </Text>

                  <Text className="text-yellow-200 text-sm text-center">
                    {item.meatType} • {item.cookingStyle}
                  </Text>
                </Pressable>
              )}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default favorites;
