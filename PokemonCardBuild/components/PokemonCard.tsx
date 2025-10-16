import { Platform, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses
}) {

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
        {/* <Image source={image} accessibilityLabel={`{name} pokemon`}></Image> */}
      </View>
      <View style={styles.type}>
        <Text>{type}</Text>
      </View>
      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weaknesses: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white", borderRadius: 16, borderWidth: 2, margin: 16, padding: 16, ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 5
      }
    })
  },
  nameContainer: {flexDirection:"row", justifyContent:"space-between", marginBottom: 32},
  name: {fontSize: 30, fontWeight: "bold"},
  hp:{fontSize: 22},
  type: {}
})