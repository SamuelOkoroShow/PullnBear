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

const female = "Female"
const male = "male"


export default class Pull extends Component {
  constructor(props){
    super(props)

    this.state = {
      gender: female
    }
 
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.rowContainer}>
      <View style={{width:30, backgroundColor:'#75a870'}}></View>
      </View>
      <View style = {{backgroundColor:'#75a870', justifyContent:"center", alignItems:'center', height:13}} >
       <Text style ={{color:'#fff', fontSize:9, fontWeight:'900'}}>Pull&Bear</Text>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection:'row'
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


