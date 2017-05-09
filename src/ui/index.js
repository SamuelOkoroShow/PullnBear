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
  Image,
  View
} from 'react-native';

import Gender from './maleFemale'
import Hats from './Bear/hats'
import Msc from './Msc'
import Root from './root'
import logo from '../imgs/logo.png'

export default class Pull extends Component {
  splash(){
    return(<View />)
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{height:70, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#f3f3f3', paddingTop:10, justifyContent:"center"}}>
<Image source = {logo} resizeMode="contain" style={{width:100,}} />
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


