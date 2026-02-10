import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{ title: "Menu", headerShown: false }}
      />
      <Tabs.Screen
        name="favorites"
        options={{ title: "Favorites", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;
