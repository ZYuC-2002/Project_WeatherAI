import React, { Component } from 'react'
import { View, Text, Image, ScrollView, Linking } from 'react-native'
import axios from 'axios'
import { Card, Title, Paragraph } from 'react-native-paper'

// export default class HomeScreen extends Component {
//     const name = "Maru";
//     return(
//         <Text>Hello, I am {name}!</Text>
//     )
// }

const HomeScreen = () => {
    const name = "Maru";
    return(
        <Text>Hello, I am {name}!</Text>
    )
};

export default HomeScreen;