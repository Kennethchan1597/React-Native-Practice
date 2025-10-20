import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const [name, setName] = useState("");

  const handleNavigate = () => {
    navigation.navigate("About", { username: name });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.text}>Home</Text>
      <TextInput style={styles.input} placeholder='Enter yout name' value={name} onChangeText={setName} />
      <Button title="Submit" onPress={() => handleNavigate() } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 2,
    margin: 12,
    width: 200,
    height: 40,
    padding: 10
  }
});
