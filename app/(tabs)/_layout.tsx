import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
// Import your images directly as variables
const homeIcon = require("../../assets/icons/home.png");
const highlightIcon = require("../../assets/images/highlight.png");
const searchIcon = require("../../assets/icons/search.png");
const heartIcon = require("../../assets/icons/heartOutline.png");
const mealIcon = require("../../assets/icons/meal.png");

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={highlightIcon}
        style={{ flexDirection: "row", width: 100 }}
        className="absolute w-full h-full rounded"
        resizeMode="contain"
      >
        <Text> {title} </Text>
      </ImageBackground>
    );
  }
  return (
    <View>
      <Image source={icon} />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={homeIcon} />
          ),
        }}
      />

      <Tabs.Screen
        name="meals"
        options={{
          title: "Meals",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={mealIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={heartIcon} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={searchIcon} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
