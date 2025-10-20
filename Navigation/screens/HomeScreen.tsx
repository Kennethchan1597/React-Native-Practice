import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

const Navigation = () => {
  
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.text}>Home</Text>
      <Button title="About" onPress={Navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 22 }
})