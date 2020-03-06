import React, { useContext } from 'react'
import { Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Center } from './Center';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { HomeParamList, HomeStackNavProps } from './HomeParamList';
import { AuthContext } from './AuthProvider';
import faker from "faker";



interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed({navigation}: HomeStackNavProps<'Feed'>) {
  return(
    <Center>
      <FlatList 
      style={{ width: "100%"}}
      renderItem={({item}) => {
      return <Button title={item} onPress={() => {
        navigation.navigate("Product", {
          name: item
        });
      }} />
      }}
      keyExtractor={(product, idx) => product + idx}
      data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  )
}
function Product({ route }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
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
        <Stack.Screen options={({route}) => ({
          headerTitle: `Product: ${route.params.name}`
        })
      }
       name="Product" component={Product}/>
      </Stack.Navigator>
    );
}