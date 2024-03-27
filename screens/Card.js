import React, {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon, Avatar } from '@rneui/themed';


const Cards = ({ route}) => {

    // const currentUrl = `https://api.nobelprize.org/2.1/laureate/${route.params.id}`;
    // const [laureates, setLaureates] = useState({});
    const { laureate } = route.params;

    // const fetchData = async() => {

    //   console.log("Fetching data...");

    //   // fetch the pokemon from the api
    //   const response = await fetch(currentUrl);
    //   const jsonData = await response.json();

    //   setLaureates(jsonData.laureates);

    // };

    // useEffect(() => {
    //     fetchData();
    // }, {});

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card>
                    <Card.Title>{laureate.knownName.en}</Card.Title>
                    <Card.Divider />
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
});

export default Cards;