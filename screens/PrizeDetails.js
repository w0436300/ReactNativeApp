import React, {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon, Avatar } from '@rneui/themed';
import { ViewBase } from 'react-native';


const PrizeDetails = ({ route}) => {
    const { year, category } = route.params;
    const [prizeDetails, setPrizeDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async() => {
      setIsLoading(true)

      const baseUrl = `https://api.nobelprize.org/2.1/nobelPrize/${category}/${year}`;

      console.log("Fetching data...");

      
      const response = await fetch(baseUrl);
      const jsonData = await response.json();
      
      setPrizeDetails(jsonData[0]);


      
      setIsLoading(false)
    
  };

  useEffect(() => {
    fetchData()    

  }, [year, category]);

  if (!prizeDetails?.laureates?.length) {
    return (
        <Card style={styles.container}>
            <Card.Title>No awards this year</Card.Title>
        </Card>
    );
}
  
    return (
      <ScrollView>
        <View style={styles.container}>
                <Card>
                    <Card.Title> {prizeDetails.category.en}</Card.Title>
                    <Card.Title> {year}</Card.Title>
                    <Card.Divider />
                    <Text>
                        Awarded Date {prizeDetails.dateAwarded}
                    </Text>
                    <Text>
                       Prize Amount {prizeDetails.prizeAmount}
                    </Text>
                    <Card.Divider />
                    <Card.Title> Laureate(s)</Card.Title>
                    <Card.Divider />
                        {prizeDetails.laureates.map((laureate) => (
                        <View key={laureate.id} style={styles.laureateContainer}>
                            <Text style={styles.laureateName}>{laureate.fullName.en}</Text>
                            <Text>{laureate.motivation.en}</Text>
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
    title: {
      position:"relative",
      alignItems:"center"
    },
    laureateContainer: {
      marginBottom: 15,
    },
    laureateName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default PrizeDetails;