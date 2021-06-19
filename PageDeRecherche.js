import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 View,
 Button,
 ActivityIndicator,
 Image,
} from 'react-native'; 

//type Props = {};
export default class PageDeRecherche extends Component {
 render() {
 return (
 <View style={styles.conteneur}>
 <Text style={styles.description}>
 Rechercher des pays à explorer !
 </Text>
 <Text style={styles.description}>
 Rechercher par nom
 </Text>
 </View>
 );
 }
}
const styles = StyleSheet.create({
    description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
    },
    conteneur: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
    },
   });