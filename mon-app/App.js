import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

class App extends React.Component {
  
  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style= {styles.text1}>text 1 : taille de police de 30</Text>
          <Text style= {styles.text2}>text 2 : centrée</Text>
          <Text style= {styles.text3}>text 3 : texte en gras</Text>
        </View>
        <Image source={require('./assets/konexio.png')} />
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
  }
});


export default App
