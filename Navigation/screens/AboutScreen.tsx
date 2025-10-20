import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.text}>Home</Text>
      <Button title="About" />
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
