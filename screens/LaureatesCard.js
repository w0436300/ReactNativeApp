import React, {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon, Avatar } from '@rneui/themed';


const Cards = ({ navigation, route}) => {
  const currentUrl = `https://api.nobelprize.org/2.1/laureate/${route.params.id}`;
  const  [laureate, setLaureates] = useState({})
  const fetchData = async() => {

    console.log("Fetching data...");

    // fetch the laureate from the api
    const response = await fetch(currentUrl);
    const jsonData = await response.json();

    setLaureates(jsonData[0]);

  };

  useEffect(() => {
      fetchData();
  }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card>
                  <Card.Title h3>{laureate.fullName?.en || laureate.orgName?.en}</Card.Title>
                  <Card.Divider />
                  <View>
                    <Text>
                      {laureate.birth ? `Birth Date: ${laureate.birth.date}` : ''}
                      {laureate.founded ? `Founded Date: ${laureate.founded.date}` : ''}
                    </Text>
                    <Text>
                      Country: {laureate.birth?.place.country?.en || laureate.founded?.place.country?.en }                
                    </Text>     
                  </View>
                  <Card.Divider style={{ marginTop: 20 }}/>
                  <Card.Title h4 >Nobel Prize(s)</Card.Title>
                  <Card.Divider />
                  { laureate.nobelPrizes?.map((Prize) => (
                        <View key={Prize.sortOrder} style={styles.container}>
                            <Text style={styles.name}>Category:{Prize.category.en} Year:{Prize.awardYear}</Text>
                            <Text>{Prize.motivation.en}</Text>
                        </View>
                         ))}     



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
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 5,
    },
});

export default Cards;