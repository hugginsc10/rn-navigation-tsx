import React, { useContext } from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Center } from './Center';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './AuthProvider';

interface HomeStackProps {}
const Stack = createStackNavigator();

function Feed() {
  return(
    <Center>
      <Text>Feed</Text>
    </Center>
  )
}
export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const {logout} = useContext(AuthContext)
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => {
                logout()
              }}>
                <Text>LOGOUT</Text>
                </TouchableOpacity>
            )
          }
        }} component={Feed}/>
      </Stack.Navigator>
    );
}