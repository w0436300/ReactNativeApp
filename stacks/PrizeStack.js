import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesList from '../screens/Categories';
import YearsList from '../screens/YearsList';
import PrizeDetails from '../screens/PrizeDetails';


const Stack = createNativeStackNavigator();

export default function PrizeStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesList} />
          <Stack.Screen name="Years" component={YearsList} />
          <Stack.Screen name="PrizeDetails" component={PrizeDetails} />

        </Stack.Navigator>
        
    );
  }