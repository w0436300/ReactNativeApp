import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import { ListItem} from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const List = ({navigation}) => {

    // set state variables for pokemon
    const [laureates, setLaureates] = useState([]);
    const [offset, setOffset] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async() => {
        console.log(`Fetching data with offset: ${offset}`);
        setIsLoading(true)
        const baseUrl = `https://masterdataapi.nobelprize.org/2.1/laureates?offset=${offset}&limit=25`;

        console.log("Fetching data...");

        // fetch the laureates from the api
        const response = await fetch(baseUrl);
        const jsonData = await response.json();
       
        setLaureates([...laureates,...jsonData.laureates]);
        setOffset(offset+25)

        setIsLoading(false)
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
            <SafeAreaView style= {styles.container}>
                    <FlatList 
                        data={laureates}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            const displayName = item.fullName?.en || item.orgName?.en;
                            return (
                                <ListItem onPress={() => {
                                    navigation.navigate('Cards',{
                                        id: item.id
                                    });
                                }}>
                                    <ListItem.Content>
                                        <ListItem.Title>{displayName}</ListItem.Title>
                                        <ListItem.Title>{item.id}</ListItem.Title>

                                    </ListItem.Content>
                                </ListItem>
                            )
                        }}
                        onEndReached={fetchData}
                        onEndReachedThreshold={0.5}
                    />
                    { isLoading && <ActivityIndicator size="large" marginVertical={8} /> }             
            </SafeAreaView>           
        
    );
};
const styles = StyleSheet.create({
    container: {
        flex : 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default List;