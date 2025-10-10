import { Pressable, Text } from "react-native";

const CustomButton = ({ callThisFunction, buttonName }) => (
  <Pressable
    onPress={callThisFunction}
    style={{ fontSize: 100, padding: 200, fontWeight: "bold" }}>
    <Text>{buttonName}</Text>
  </Pressable>
);

export default CustomButton;


