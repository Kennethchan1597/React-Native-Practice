import { useState } from "react";
import { StatusBar, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Form() {

  const [name, setName] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={isDarkMode ? styles.drakContainer : styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="username"
        value={name}
      // keyboardType="default" 
      // secureTextEntry
      // autoCapitalize="none"
      // autoCorrect={false}
      />
      <TextInput style={styles.inputBox} placeholder="Type somthing" multiline />
      <Text>Heading: {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={() => setDarkMode(!isDarkMode)}
        trackColor={{true:"purple", false:"blue"}} 
        thumbColor="lightgreen"
        ios_backgroundColor="gray" // IOS only, set the background coloe of the track
        disabled={false} // when ture, cannot toggle
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: StatusBar.currentHeight },
  drakContainer: { flex: 1, backgroundColor: "black", paddingTop: StatusBar.currentHeight },
  input: { height: 40, margin: 12, padding: 10, borderWidth: 1 },
  inputBox: { height: 200, borderWidth: 1, padding: 10, margin: 12, textAlignVertical: "top" },
  text: { fontSize: 20 },
  switchContainer: {flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between", paddingHorizontal:10},
})