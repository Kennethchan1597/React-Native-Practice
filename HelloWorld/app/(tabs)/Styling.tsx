import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Styling() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.box, styles.box1Text]}>
          <Text>Box1</Text>
        </View>
        <View style={[styles.box, styles.box2Text]}>
          <Text>Box2</Text>
        </View>
        <View style={styles2.container}>
          <Text style={styles2.text}>No Style Inheritance</Text>
        </View>
        <Text style={styles2.container}>
          <Text style={styles2.text}>With Style Inheritance</Text>
        </Text>
      </ScrollView>
    </View>
  );
}




const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60, borderWidth: 2 },
  box: { height: 100, width: 100, padding: 10, borderStyle: "solid", borderRadius: 5, borderWidth: 2, borderColor: "black", marginVertical: 10 },
  box1Text: { backgroundColor: "lightblue", color: "white" },
  box2Text: { backgroundColor: "lightgreen", color: "black" },
})

const styles2 = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60, color: "blue", borderWidth: 2, marginVertical: 5 },
  text: { textAlign: "center" }
})