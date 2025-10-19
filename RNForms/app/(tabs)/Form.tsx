import { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Form() {

  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <TextInput style={styles.input} onChangeText={setName} />
      <Text>Heading: {name}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: StatusBar.currentHeight },
  input: { height: 40, margin: 12, padding: 10, borderWidth: 1 }
})