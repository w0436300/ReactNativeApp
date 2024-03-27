import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LaureatesStack from './stacks/LaureatesStack';
import PrizeStack from './stacks/PrizeStack';
import List from './screens/LaureatesList';
import CategoriesList from './screens/Categories';

const Tab = createBottomTabNavigator();



export default function App () {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Laureates" component={LaureatesStack} />
        <Tab.Screen name="Prizes" component={PrizeStack} />
      </Tab.Navigator>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
