import { Image, ImageBackground, Text, View } from "react-native";
import logoImg from "../../assets/images/icon.png";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 80 }}>
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image Text</Text>
      </ImageBackground>
      <Text>
        <Text style={{ color: "white" }}>Hello </Text>Wosrld
      </Text>
      <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
    </View>
  );
}

// Move this declaration to a separate file named `declarations.d.ts` in the root of your project.

