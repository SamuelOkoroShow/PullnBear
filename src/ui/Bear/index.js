/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const day = "Day"
const night = "Noche"
import Hats from './hats'

export default class Pull extends Component {
  constructor(props){
    super(props)
    this.state = {
      clock: day
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{height:70}}>
       <Text style={styles.title}>Your Gear</Text>
       <Text style={styles.subTitle}>For your tactical grind</Text>
       <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}><Text>{this.state.clock}</Text></View>
       </View>
       <Hats />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize:18,
    fontWeight:'600',
    color:'#333'
  },
  subTitle:{
    fontSize:12
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


