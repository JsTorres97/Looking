import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from "react-native";
import { DrawerNavigator } from 'react-navigation'; 
import * as firebase from 'firebase';
import CilmaScreen from "../screens/ClimaScreen";

export default class Dashboard extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>DashboardScreen</Text>
                <Button style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.LogoutFacebook()}
          title="Cerrar sesión">
          Cerrar Sesión
        </Button>
        </View>
        );
    }
}



 {/* <View style={styles.container}>
                <Text>DashboardScreen</Text>
                <Button style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.LogoutFacebook()}
          title="Cerrar sesión">
          Cerrar Sesión
        </Button>
        </View>*/}

         {/* async LogoutFacebook(){
        firebase.auth().signOut();
    }*/}