import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, Button, Alert, ActivityIndicator } from 'react-native';

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
        <Button
        title="Bouton"
        style = {styles.button}
        onPress={() => Alert.alert('Bouton cliqué')}
        />
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. 
          <ActivityIndicator style = {styles.activityIndicator} />
          </Text>

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
  },

  button: {
    backgroundColor: 'red',
    width: 100,
    alignItems: 'center',
 },

 activityIndicator: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 80
}

});


export default App
