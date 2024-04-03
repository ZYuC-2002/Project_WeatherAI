import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    const AUTHORIZATION_KEY = 'CWA-FADE6AC3-54FB-452F-BC9D-2A94204257D6';
    const STATION_ID = 'C0ACA0';

    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
      fetch(
        `https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=${AUTHORIZATION_KEY}&StationId=${STATION_ID}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTemperature(data.records.Station[0].WeatherElement.AirTemperature);
          console.log(temperature);
        });
    }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.text}>新莊區目前溫度：{temperature}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
});

export default HomeScreen;