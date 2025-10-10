import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Exercise() {

  // const width = useWindowDimensions().width;
  // const height = useWindowDimensions().height;

  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window")
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change",
      ({ window }) => setDimensions({ window }));
    return () => subscription?.remove();
  });

  return (
    <View style={styles.container}>
      <View style={[styles.box, { height: dimensions.window.width > 500 ? "70%" : "50%", width: dimensions.window.width > 500 ? "15%" : "80%", }]}>
        <Text style={[styles.text, { fontSize: dimensions.window.width > 500 ? 50 : 24, color: dimensions.window.width > 500 ? "darkgrey" : "black" }]}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", alignItems: "center", justifyContent: "center" },
  box: { backgroundColor: "lightblue", alignItems: "center", justifyContent: "center" },
  text: { fontWeight: "bold" }
})