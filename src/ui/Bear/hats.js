/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import hat1 from '../../imgs/hat1.png'
import hat2 from '../../imgs/hat2.png'
import hat3 from '../../imgs/hat3.png'
import hat4 from '../../imgs/hat4.png'
import logo from '../../imgs/logo.png'

import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView,
  Text,
  View
} from 'react-native';

const day = "Day"
const night = "Noche"
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Pull extends Component {
  constructor(props){
    super(props)
    this.state = {
      clock: day,
      dataSource: ds.cloneWithRows([
        hat1, hat2, hat3, hat4
      ])
    }
  }

  eachHat(x){
    return(<TouchableOpacity style={{width:120, borderRadius:5, margin:2, height:120, alignItems:'center', justifyContent:'center', borderBottomWidth:3, backgroundColor:'#fff', padding:5, borderBottomColor:'#ffa5bc'}}>
      <Image source ={x} resizeMode='contain' style={{width:100, height:100}} />
      </TouchableOpacity>)
  }

  render() {

    return (
      <View style={styles.container}>
      <View style={{height:70, backgroundColor:'#ffff', alignItems:'center', borderBottomWidth:3, borderBottomColor:'#a5b8ff', paddingTop:10, marginBottom:3, justifyContent:"center"}}>
<Image source = {logo} resizeMode="contain" style={{width:100}} />
</View>
       <ListView 
       contentContainerStyle ={{flex:1, flexWrap:'wrap',}}
       horizontal ={true}
       dataSource = {this.state.dataSource}
       renderRow = {(rowData) => this.eachHat(rowData)}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f1f1f1'
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


