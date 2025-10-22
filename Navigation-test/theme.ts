import { DefaultTheme, Theme } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";

// Light color palette
const LightColors = {
  primary: "#4F46E5",
  background: "#F9FAFB",
  card: "#FFFFFF",
  text: "#111827",
  border: "#E5E7EB",
};

// Dark color palette
const DarkColors = {
  primary: "#8B5CF6",     // lighter purple accent
  background: "#1F2937",  // dark gray background
  card: "#111827",        // darker card color
  text: "#F9FAFB",        // off-white text
  border: "#374151",      // subtle dark border
};

// Default stack options generator
export const getStackOptions = (colors: typeof LightColors): NativeStackNavigationOptions => ({
  headerStyle: { backgroundColor: colors.card },
  headerTitleStyle: { fontWeight: "bold", color: colors.text },
  headerTintColor: colors.primary,
  contentStyle: { backgroundColor: colors.background },
});

// Hook to get proper theme based on system appearance
export const useAppTheme = (): Theme => {
  const scheme = useColorScheme(); // "light" | "dark" | null
  const colors = scheme === "dark" ? DarkColors : LightColors;

  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
    },
  };
};
