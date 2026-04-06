import { Tabs } from "expo-router";
import { Image, ImageBackground, View } from "react-native";
// Import your images directly as variables
const homeIcon = require("../../assets/icons/home.png");
const highlightIcon = require("../../assets/images/highlight.png");
const drinkIcon = require("../../assets/icons/drink.png");
const heartIcon = require("../../assets/icons/heart.png");
const heart = require("../../assets/icons/heart.png");
const mealIcon = require("../../assets/icons/meal.png");

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <View className="w-20 h-20 items-center justify-center">
        <ImageBackground
          source={highlightIcon}
          className="w-16 h-20 items-center justify-center"
          resizeMode="contain"
        >
          <Image
            source={icon}
            className="w-8 h-8 items-center justify-center"
          />
        </ImageBackground>
      </View>
    );
  }
  return (
    <View className="items-center justify-center">
      <Image
        source={icon}
        className="w-8 h-8 opacity-70 items-center justify-center"
      />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              className="items-center justify-center"
              focused={focused}
              icon={homeIcon}
            />
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
        name="drinks"
        options={{
          title: "Drinks",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={drinkIcon} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
