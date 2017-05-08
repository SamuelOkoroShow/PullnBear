/**
 * This view is for distributing mock data
 * 
 * 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';


export default class Pull extends Component {
  renderScene({ id }, navigator){
    const Scene = routes[id]
    return <Scene {...this.props} navigator={navigator} gameManager={ this.gameManager }/>
  }

  render() {
    return (
      <View style={styles.container}>
      <Navigator 
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


