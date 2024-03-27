import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList} from 'react-native';
import { ListItem} from '@rneui/themed';

const List = ({navigation}) => {

    // set state variables for pokemon
    const [laureates, setLaureates] = useState([]);

    const fetchData = async() => {

        const baseUrl = `https://api.nobelprize.org/2.1/laureates`;

        console.log("Fetching data...");

        // fetch the pokemon from the api
        const response = await fetch(baseUrl);
        const jsonData = await response.json();

        // set the pokemon to current pokemon plus previous
        //setPokemon(jsonData.data);
        // setLaureates([...laureates,...jsonData.data]);
        setLaureates(jsonData.laureates);

        // increment the page number
        //let newPage = ++page;
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
            <SafeAreaView>
                <View>
                    <FlatList 
                        data={laureates}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            return (
                                <ListItem onPress={() => {
                                    navigation.navigate('Cards',{
                                        laureate: item
                                    });
                                }}>
                                    <ListItem.Content>
                                        <ListItem.Title>{item.knownName.en}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            )
                        }}
                        onEndReached={fetchData}
                        onEndReachedThreshold={0.5}
                    />
                </View>
                
            </SafeAreaView>           
        
    );
};

export default List;