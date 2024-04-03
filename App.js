import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LaureatesStack from './stacks/LaureatesStack';
import PrizeStack from './stacks/PrizeStack';
import { MaterialIcons } from 'react-native-vector-icons';


const Tab = createBottomTabNavigator();



export default function App () {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Laureates') {
              iconName = 'people';
            } else if (route.name === 'Prizes') {
              iconName = focused ? 'description' : 'menu';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
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
