import { StyleSheet, Text, View } from "react-native";

export default function Box({name, style}) {
  return (
    <View style={[styles.flexItem, style]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flexItem: { borderWidth: 2, borderRadius: 10, justifyContent: "center", alignItems: "center", padding:40},
  text: { fontSize: 30, fontWeight: "bold" }
})


