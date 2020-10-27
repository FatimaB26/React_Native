import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

class App extends React.Component {
  
  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style= {styles.text1}>text 1 : taille de police de 30</Text>
          <Text style= {styles.text2}>text 2 : centrée</Text>
          <Text style= {styles.text3}>text 3 : texte en gras</Text>
        </View>
        <Image 
        style= {styles.logo}
        source={require('./assets/konexio.png')} />
        <Image 
        style= {styles.logo}
        source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },

  text1 : {
    fontSize: 30,
    paddingTop: 80,
    paddingBottom: 80
  },

  text2 : {
    alignSelf: 'center',
    paddingTop: 80,
    paddingBottom: 80,
    alignItems: 'center'
  },

  text3 : {
    fontWeight: 'bold',
    paddingTop: 80,
    paddingBottom: 80
  },

  logo : {
    alignSelf: 'center',
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }

});


export default App
