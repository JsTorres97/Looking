import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, Image } from "react-native";
import { DrawerNavigator } from 'react-navigation'; 
import * as firebase from 'firebase';
import CilmaScreen from "../screens/ClimaScreen";

export default class Dashboard extends Component{

    async LogoutFacebook(){
        firebase.auth().signOut();
    }
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});



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