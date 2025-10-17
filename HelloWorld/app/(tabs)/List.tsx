import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import pokemonList from "../../data.json"

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          pokemonList.map(pokemon => {

            console.log("list:" + pokemon.id)
            return (
              <View key={pokemon.id} style={styles.list}>
                <Text style={styles.text}>{pokemon.name}</Text>
                <Text style={styles.text}>{pokemon.type}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  list: { flexDirection: "row", alignItems: "center", gap: 20, borderWidth: 2, borderRadius: 10, marginBottom: 16, padding: 8 },
  text: { fontSize: 22, fontWeight: "bold" },
})