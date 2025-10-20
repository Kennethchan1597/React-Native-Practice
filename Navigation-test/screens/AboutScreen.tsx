import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type AboutScreenProp = NativeStackScreenProps<RootStackParamList, "About">

export default function AboutScreen({ route, navigation }: AboutScreenProp) {

  const{username} = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.text}>{username}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
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
  }
});
