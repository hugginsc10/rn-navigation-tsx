import React, { useContext } from 'react'
import { Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Center } from './Center';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { HomeParamList } from './HomeParamList';
import { AuthContext } from './AuthProvider';
import faker from "faker";


interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed() {
  return(
    <Center>
      <FlatList 
      style={{ width: "100%"}}
      renderItem={({item}) => {
      return <Button title={item} onPress={() => {}} />
      }}
      keyExtractor={(product, idx) => product + idx}
      data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  )
}
function Product() {
  return (
    <Center>
      <Text>Product</Text>
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
        <Stack.Screen name="Product" component={Product}/>
      </Stack.Navigator>
    );
}