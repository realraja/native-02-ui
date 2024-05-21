import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Register from "./Screens/Register";
import CheckCamera from "./Screens/CheckCamera";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="Camera" component={CheckCamera} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

