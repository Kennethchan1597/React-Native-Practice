import PokemonCard from "@/components/PokemonCard";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function pokemonCard() {

  const charmanderData = {
    name: "Charmander",
    image: require("../../assets/images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["water", "Rock"]
  }

  return (
    <SafeAreaView style={styles.container}>
        <PokemonCard {...charmanderData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingTop: Platform.OS === "android" ? 25 : 0 }
});