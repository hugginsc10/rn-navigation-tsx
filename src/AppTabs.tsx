import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppParamList } from './AppParamList';
import { Center } from './Center';
interface AppTabsProps {

}
const Tabs = createBottomTabNavigator<AppParamList>();
function Home() {
  return (
    <Center>
      <Text>Home</Text>
    </Center>
  )
}
function Search() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  )
}
export const AppTabs: React.FC<AppTabsProps> = ({}) => {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={Home} />
        <Tabs.Screen name='Search' component={Search} />
      </Tabs.Navigator>
    );
}