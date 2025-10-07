import Box from "@/components/Box";
import { StyleSheet, View } from "react-native";

export default function FlexLayout() {
  return (
    <View style={styles.container}>
      <Box style={{color:"white", flexBasis:10000}} name={"Box1"}/>
      <Box style={{color:"white"}} name={"Box2"}/>
      <Box style={{color:"white"}} name={"Box3"}/>
      <Box style={{color:"white"}} name={"Box4"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, padding:60, backgroundColor: "plum", flexDirection:"row", flexWrap:"wrap", gap:10 }
})
