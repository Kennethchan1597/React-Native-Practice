import { StyleSheet, Text, View } from "react-native";

export default function Exercise() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"plum", alignItems:"center", justifyContent:"center" },
  box: {height:300, width:300, backgroundColor:"lightblue", alignItems:"center", justifyContent:"center" },
  text: { fontSize:24 } 
})