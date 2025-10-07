import Greet from "@/components/Greet";
import { useState } from "react";
import { Alert, Button, Image, Modal, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import logoImg from "../../assets/images/icon.png";

export default function App() {

  const [isImageVisible, setImageVisible] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isStatusVisible, setStatusVisible] = useState(true);

  const handleRequestClose = () => {
    Alert.alert(
      "Close Modal?",
      " ",
      [
        { text: "Yes", style: "destructive", onPress: () => { setModalVisible(false) } },
        { text: "Cancel", style: "cancel" },
        { text: "other" }
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title={isStatusVisible ? "Hide status Bar" : "Show Status Bar"} onPress={() => setStatusVisible(!isStatusVisible)} />
        {!isStatusVisible && <StatusBar hidden />}
        <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
        <Greet name={"Kenneth"}/>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Button title={isImageVisible ? "Hide Image" : "Show Image"} onPress={() => setImageVisible(!isImageVisible)} />
        {isImageVisible && <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>}
        <Button title="Show Modal" onPress={() => setModalVisible(true)} />
        {isModalVisible &&
          <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            onRequestClose={() => handleRequestClose()}>
            <View style={{ flex: 1, backgroundColor: "black", padding: 50 }}>
              <Text style={{ fontSize: 20, color: "white" }}>This is a Modal</Text>
              <Button title="Close Modal" onPress={() => handleRequestClose()} />
            </View>
          </Modal>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:"plum", padding:60},

})
