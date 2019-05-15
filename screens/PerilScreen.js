import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import * as firebase from 'firebase';

class PerfilScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
          <View  style={styles.header}>
              <Image source={{uri: 'https://www.incimages.com/uploaded_files/image/970x450/getty_583734066_335273.jpg'}} style={styles.header}/>          
          </View>
          <Image style={styles.avatar} source={{uri: firebase.auth().currentUser.photoURL}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{firebase.auth().currentUser.displayName}</Text>
              <Text style={styles.info}>{firebase.auth().currentUser.providerData[0].email}</Text>
              
            </View>
        </View>
      </View>
        );
    }
}
export default PerfilScreen;

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00BFFF",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
});