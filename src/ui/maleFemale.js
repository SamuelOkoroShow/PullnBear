/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import bear from '../imgs/bear.png'
import pull1 from '../imgs/pull1.png'
import pull2 from '../imgs/pull3.png'
import pull3 from '../imgs/pull2.png'
import logo from '../imgs/logo.png'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Pull extends Component {
  constructor(){
    super()
    this.state = {
      pull : pull1
    }
  }
  componentDidMount(){
    setTimeout(() => {this.setState({pull:pull2})}, 3000)
    setTimeout(() => {this.setState({pull:pull3})}, 7000)
  }
  render() {
    return (
      <View style={styles.container}>
<View style={{height:70, alignItems:'center', borderBottomWidth:1, borderBottomColor:'#f3f3f3', paddingTop:10, justifyContent:"center"}}>
<Image source = {logo} resizeMode="contain" style={{width:100}} />
</View>
        <View style={styles.choose}>
       <TouchableOpacity style={styles.pull}><Image source ={this.state.pull} resizeMode="contain" style={{width:190}} /></TouchableOpacity>
       <TouchableOpacity style={styles.bear}><Image source ={bear} resizeMode="contain" style={{width:190}} /></TouchableOpacity>
       </View>
       <View style = {{backgroundColor:'#ff7373', justifyContent:"center", alignItems:'center', height:13}} >
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
  choose: {
    flex: 1,
    flexDirection:'row',

  },
  pull:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:'#c0ddb8'
  },  
  bear:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
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


