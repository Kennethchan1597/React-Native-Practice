import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import groupedPokemonList from "../../grouped-data.json";

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
        <SectionList
        sections={groupedPokemonList}
        renderItem={({item}) => (
          <View>
            <Text style={{fontSize: 18, borderWidth:1, borderRadius:6, padding:8}}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View >
            <Text style={{fontSize: 28}}>{section.title}</Text>
          </View>
        )}
        />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  list: { alignItems: "center", gap: 20, borderWidth: 2, borderRadius: 10, padding: 8 },
  text: { fontSize: 22, fontWeight: "bold" },
  listHeader: { borderWidth:1.5, borderRadius:10, marginBottom:16  },
})