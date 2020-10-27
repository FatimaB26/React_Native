import React from 'react';
import { FlatList, View, Text } from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    return (
      <View>
        <Text>{item.key}</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={[{key: 'a', key: 'b'}]}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        />
    );
  }
}

export default App


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
