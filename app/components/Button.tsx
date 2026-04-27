import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View className="flex-1 items-center justify-center bg-emerald-200">
        <Pressable className="bg-blue-500 px-4 py-2 rounded " onPress={onPress}>
          <Text className="bg-blue-500 px-4 py-2 rounded text-white text-lg font-bold">
            {" "}
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View className="flex-1 items-center justify-center bg-emerald-200">
      <Pressable className="bg-blue-500 px-4 py-2 rounded" onPress={onPress}>
        <Text className="text-white text-lg font-bold"> {label}</Text>
      </Pressable>
    </View>
  );
}
