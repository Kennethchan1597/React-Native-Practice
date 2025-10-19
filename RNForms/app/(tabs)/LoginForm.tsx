import { useState } from "react";
import { Button, Image, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState<{ username?: string; password?: string }>({});

  const validation = () => {
    let errors: { username?: string; password?: string } = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setError(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    {
      validation() &&
        console.log("Submitted" + "\nusername is: " + username + "\npassword is: " + password),
        setUsername(username),
        setPassword(password),
        setError({})
    }

  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.form}>
        <Image source={require("../../assets/images/icon.png")} style={styles.image} />
        <Text style={styles.label}>Username</Text>
        <TextInput value={username} onChangeText={setUsername} style={styles.input} placeholder="username" />
        {errors.username && <Text>{errors.username}</Text>}
        <Text style={styles.label}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="password" secureTextEntry />
        {errors.password ? <Text>{errors.password}</Text> : null}
        <Button title="Login" onPress={() => { handleSubmit() }} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", justifyContent: "center", alignItems: "center" },
  image: { width: 200, height: 200, alignSelf: "center", padding: 15 },
  label: { marginLeft: 12, fontWeight: "bold", fontSize: 16 },
  input: { height: 30, margin: 12, padding: 5, borderWidth: 1, borderRadius: 8, width: 250 },
  inputBox: { height: 200, borderWidth: 1, padding: 10, margin: 12, textAlignVertical: "top" },
  text: { fontSize: 20 },
  switchContainer: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", paddingHorizontal: 10 },
  form: {
    backgroundColor: "white", padding: 20, borderRadius: 10, borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5
      }
    })
  },
})