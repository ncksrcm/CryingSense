import { Slot } from "expo-router";
import { BabyProvider } from "../src/context/BabyContext";
import { ThemeProvider } from "../src/context/ThemeContext";
import BottomNavigation from "../components/BottomNavigation";
import ThemeLoading from "../src/components/ThemeLoading";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <BabyProvider>
      <ThemeProvider>
        <ThemeLoading>
          <View style={styles.container}>
            <Slot />
            <BottomNavigation />
          </View>
        </ThemeLoading>
      </ThemeProvider>
    </BabyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
