import React, { useEffect, useState, useContext } from 'react';
import { View , Text, Button, ActivityIndicator, AsyncStorage } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from './AuthParamList';
import { AuthContext } from './AuthProvider';

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({navigation}: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext)
  return (
   <Center>
    <Text>I am a login screen</Text>
    <Button 
      title="log me in"
      onPress={() => {
        login();
      }}
      />
    <Button 
      title="go to register" 
      onPress={() => {
        navigation.navigate("Register");
      }}
    />
    
  </Center>
  );
}

function Register({ 
  navigation,
  route }: AuthNavProps<"Register">) {
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
  const {user, login} = useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('user').then(userString => {
      if (userString) {
        login()
      } 
        setLoading(false)
    }).catch(err => {
      console.log(err);
    });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    )
  }
    return (
      <NavigationContainer>
        {user ? (
          <Center>
            <Text>you exist</Text>
          </Center>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              options={{
                headerTitle: "Log In"
              }}
              component={Login}
            />
            <Stack.Screen
              name="Register"
              options={{
                headerTitle: "Sign Up"
              }}
              component={Register}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
}