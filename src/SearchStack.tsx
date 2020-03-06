import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { SearchParamList } from './SeacrchParamList';
import { Center } from './Center';

interface SearchStackProps {

}
const Stack = createStackNavigator<SearchParamList>();
function Search() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  )
}
export const SearchStack: React.FC<SearchStackProps> = ({}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Search' component={Search} />
      </Stack.Navigator>
    );
}