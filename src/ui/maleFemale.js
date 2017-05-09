/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import bear from '../imgs/bear.png'
import pull1 from '../imgs/pull1.png'
import pull2 from '../imgs/pull3.png'
import pull3 from '../imgs/pull2.png'


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Pull extends Component {
  constructor(){
    super()
    this.state = {
      pull : pull1,
      height:0
    }
  }
  componentDidMount(){
    // Layout Animation type
    
    //Init Animation
    setTimeout(() => {this.setState({height:190})}, 1000)


    // Animation 1
    setTimeout(() => {this.setState({height:0})}, 3000)
    setTimeout(() => {this.setState({pull:pull2})}, 4000)
    setTimeout(() => {this.setState({height:190})}, 4050)

    //Animation 2
    setTimeout(() => {this.setState({height:0})}, 6000)
    setTimeout(() => {this.setState({pull:pull3})}, 7000)
    setTimeout(() => {this.setState({height:190})}, 7050)
  }

  componentDidUpdate(){
    LayoutAnimation.spring();
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.choose}>
       <TouchableOpacity style={styles.pull}><Image source ={this.state.pull} resizeMode="contain" style={{width:190, height:this.state.height}} /></TouchableOpacity>
       <TouchableOpacity style={styles.bear}><Image source ={bear} resizeMode="contain" style={{width:180,}} /></TouchableOpacity>
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


