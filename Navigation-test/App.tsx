import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import { getStackOptions, useAppTheme } from './theme';

export type RootStackParamList = {
  Home: undefined;
  About: { username?: string };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  const MyTheme = useAppTheme();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Home' screenOptions={getStackOptions(MyTheme.colors)}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            username: "guest"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}