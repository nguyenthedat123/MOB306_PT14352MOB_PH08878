import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Profile from './users';
export default function App() {

  return (
    <View>
  


    <Profile />

    </View>
  );
}


var styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection:"column",
    justifyContent: 'center',

  },
  toolbar:{
      backgroundColor:'#81c04d',
      paddingTop:30,
      paddingBottom:10,
      flexDirection:'row'    //Step 1
  },
  toolbarButton:{
      width: 50,            //Step 2
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex:1                //Step 3
  }
});
