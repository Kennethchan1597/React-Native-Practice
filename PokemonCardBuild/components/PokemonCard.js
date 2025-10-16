import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses
}) {

  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image source={image} style={styles.image} accessibilityLabel={`{name} pokemon`} resizeMode="contain"></Image>
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.text}>{type}</Text>
        </View>
      </View>

      <View>
        <Text style={[styles.text, { marginBottom: 16 }]}>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text style={styles.text}>Weaknesses: {weaknesses.join(", ")}</Text>
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
  nameContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 32 },
  name: { fontSize: 30, fontWeight: "bold" },
  hp: { fontSize: 22 },
  image: { width: "100%", height: 200, marginBottom: 16 },
  typeContainer: { marginBottom: 40, alignItems: "center" },
  badge: { flexDirection: "row", alignItems: "center", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 12, borderWidth: 4 },
  typeEmoji: { fontSize: 30, marginRight: 12 },
  text: { fontSize: 22, fontWeight: "bold" }
})