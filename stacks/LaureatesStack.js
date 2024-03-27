import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cards from '../screens/LaureatesCard';
import List from '../screens/LaureatesList';

const Stack = createNativeStackNavigator();

export default function LaureatesStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={List} />
          <Stack.Screen name="Cards" component={Cards} />
        </Stack.Navigator>
        
    );
  }