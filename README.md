# Welcome to your Expo app 👋

## Get started

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Notes

# Notes. meals.tsx-tabs

<Text className="text-xl mt-5 item-not-center">
{" "}
A list of meals will appear here. Once clicked it will bring you to
their details screen
</Text>

<Link href="../Meals/birriaTacos" className="text-xl font-bold">
{" "}
Birria Tacos
</Link>
<Link href="../Meals/cilantroChicken" className="text-xl font-bold">
{" "}
Cilantro Lime Chicken
</Link>

- Meal Card
  <FlatList
  renderItem={({ item }) => <Text> {item} </Text>}
  data={meal.ingredients} ></FlatList>
