import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import { ListItem} from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const YearsList = ({navigation, route}) => {
    const { category } = route.params;
    const currentYear = new Date().getFullYear();    
    const years = Array.from({ length: currentYear - 1901 + 1 }, (_, index) => currentYear - index);

    return (
            <SafeAreaView style= {styles.container}>
                    <FlatList 
                        data={years}
                        keyExtractor={item => item.toString()}
                        renderItem={({item}) => {
                            return (
                                <ListItem onPress={() => {
                                    navigation.navigate('PrizeDetails',{
                                        year: item,
                                        category: category
                                    });
                                }}>
                                    <ListItem.Content>
                                        <ListItem.Title>{item}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            )
                        }}
                        // onEndReached={fetchData}
                        onEndReachedThreshold={0.5}
                    />
  
            </SafeAreaView>            
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default YearsList;