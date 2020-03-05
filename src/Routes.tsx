import React from 'react';
import { View , Text, Button } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { Center } from "./Center";
import { AuthParamList } from './AuthParamList';

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({navigation}) {
  return (
   <Center>
    <Text>I am a login screen</Text>
    <Button 
      title="go to register" 
      onPress={() => {
        navigation.navigate("Register");
      }}
    />
  </Center>
  );
}

function Register({ navigation, route }: 
  { navigation: StackNavigationProp<AuthParamList, 'Register'>;
    route: RouteProp<AuthParamList, 'Register'>;
  }) {
  return (
  <Center>
    <Text>Route Name: {route.name}</Text>
    <Button
      title="go to login"
      onPress={() => {
        navigation.navigate("Login");
      }}
      />
  </Center>
  )
}
export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name='Login' options={{
          headerTitle: "Log In"
        }} component={Login} />
        <Stack.Screen name='Register' options={{
          headerTitle: "Sign Up"
        }} component={Register} />
      </Stack.Navigator>
      </NavigationContainer>
    );
}