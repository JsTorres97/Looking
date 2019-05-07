import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Button
  } from "react-native";

  import * as firebase from 'firebase';



class ClimaScreen extends Component {
    async LogoutFacebook(){
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={styles.container}>
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
export default ClimaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});