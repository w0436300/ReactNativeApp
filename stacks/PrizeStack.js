import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesList from '../screens/Categories';
import YearsList from '../screens/YearsList';
import PrizeDetails from '../screens/PrizeDetails';
// import Cards from '../screens/Card';
import List from '../screens/List';

const Stack = createNativeStackNavigator();

export default function PrizeStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Prize" component={CategoriesList} />
          <Stack.Screen name="YearsList" component={YearsList} />
          <Stack.Screen name="PrizeDetails" component={PrizeDetails} />

        </Stack.Navigator>
        
    );
  }