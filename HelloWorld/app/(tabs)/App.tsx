import { useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native";
import logoImg from "../../assets/images/icon.png";

export default function App() {

  const [isImageVisible, setImageVisible] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a esse quae ipsam eveniet delectus hic, sunt omnis? Dolorem laborum minus at nam atque dolore unde corporis, quo repellendus quisquam?</Text>
        <Button title={isImageVisible ? "Hide Image" : "Show Image"} onPress={() => setImageVisible(!isImageVisible)} />
        {isImageVisible && <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>}
      </ScrollView>
    </View>
  );
}
