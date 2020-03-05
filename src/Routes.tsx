import React, { useEffect, useState, useContext } from 'react';
import { View , Text, Button, ActivityIndicator, AsyncStorage } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from './AuthParamList';
import { AuthContext } from './AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';

interface RoutesProps {}

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
        {user ? (<AppTabs />) : (<AuthStack/>)}
      </NavigationContainer>
    );
}