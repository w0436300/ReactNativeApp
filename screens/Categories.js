import { ListItem } from '@rneui/base';
import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

const categories = [
    { name: 'Chemistry', code: 'che' },
    { name: 'Economic Sciences', code: 'eco' },
    { name: 'Literature', code: 'lit' },
    { name: 'Peace', code: 'pea' },
    { name: 'Physics', code: 'phy' },
    { name: 'Medicine', code: 'med' },
  ];
  
function CategoriesList({ navigation }) {
  return (
    <SafeAreaView>
        <View>
            <FlatList 
                data={categories}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                    <ListItem
                        onPress={() => 
                            navigation.navigate('YearsList', { category:item.code })}
                    >
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                    </ListItem>
                )}
            />             
        </View>
    </SafeAreaView>

    
  );
}

export default CategoriesList;
