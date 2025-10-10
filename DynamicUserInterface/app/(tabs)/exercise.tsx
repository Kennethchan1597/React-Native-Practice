import { useEffect, useState } from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

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

  const returnedValue = Platform.select({
    ios: { color: "green", fontSize: 20 },
    android: { color: "purple", fontSize: 30 }
  });

  const style = {
    fontWeight: "bold",
    returnedValue
  }

return (
    <View style={[styles.container, { paddingTop: Platform.OS === "android" ? 25 : 0 }]}>
      <View style={[styles.box, { height: dimensions.window.width > 500 ? "70%" : "50%", width: dimensions.window.width > 500 ? "15%" : "80%", }]}>
        <Text style={[styles.text, { fontSize: dimensions.window.width > 500 ? 50 : 24, color: dimensions.window.width > 500 ? "darkgrey" : "black" }]}>Welcome!</Text>
        <CustomButton callThisFunction={() => alert("Pressed")} buttonName={"Name"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", alignItems: "center", justifyContent: "center" },
  box: { backgroundColor: "lightblue", alignItems: "center", justifyContent: "center" },
  text: {
    fontWeight: "bold",
    ...Platform.select({
      ios: { color: "green", fontStyle: "italic", fontSize: 20 },
      android: { color: "purple", fontSize: 30 }
    }),
  }
});
