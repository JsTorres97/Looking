import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import * as firebase from 'firebase';
import {firebaseConfig} from '../config/FirebaseConfig';

class DashboardScreen extends Component {

    async LogoutFacebook(){
        firebase.auth().signOut();
    }
    

    render() {
        return (
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
export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});