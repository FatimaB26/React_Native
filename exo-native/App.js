import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <text style= {styles.text1}></text>
          <text style= {styles.text2}></text>
          <text style= {styles.text3}></text>
        </View>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },

  text1 : {
    fontSize: '30',
    paddingTop: '80',
    paddingBottom: '80'
  },

  text2 : {
    justifyContent: 'center',
    paddingTop: '80',
    paddingBottom: '80'
  },

  text3 : {
    fontWeight: 'bold',
    paddingTop: '80',
    paddingBottom: '80'
  }
});
