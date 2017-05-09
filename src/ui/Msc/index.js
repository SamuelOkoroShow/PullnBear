/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ListView,
  Text,
  View
} from 'react-native';
var {height, width} = Dimensions.get('window');

const female = "Female"
const male = "male"
var mockList = [1,2,3,4,5]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var shadow = {shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 1
    }}

export default class Pull extends Component {
  constructor(props){
    super(props)
    this.state = {
      gender: female,
      dataSource: ds.cloneWithRows(mockList)
    }
 
  }
  eachCat(){
    return(<View style={{width:width-100, marginRight:-60, shadowColor: "#000000",
    shadowOpacity: 0.3,
    backgroundColor:'rgba(255,255,255,0.7)',
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    }}}></View>)
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.rowContainer}>
      <View style={{width:40, backgroundColor:'#c9e4c6'}}></View>
      <ListView
      dataSource = {this.state.dataSource}
      horizontal = {true}
      renderRow = {(rowData) => this.eachCat(rowData)} />
      </View>

      <View style = {{backgroundColor:'#bb7eff', justifyContent:"center", alignItems:'center', height:13}} >
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


