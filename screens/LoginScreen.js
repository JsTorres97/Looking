import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import * as firebase from 'firebase';
import {firebaseConfig} from '../config/FirebaseConfig';

firebase.initializeApp(firebaseConfig);


class LoginScreen extends Component {

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
          if (user != null) {
            console.log(user)
          }
        })
    }
    
      async loginWithFacebook(){
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('609042169609691', { permissions: ['public_profile', 'email'] })
        if(type=='success'){
          const credential = firebase.auth.FacebookAuthProvider.credential(token)
          firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error)=>{
            console.log(error)
          })
        }
      }

    signInWithGoogleAsync = async () =>{
        try{
            const result = await Expo.Google.logInAsync({
                behavior: 'web',
                androidClientId: '820048818141-522f5govbcfco07psovlh0je5te05l23.apps.googleusercontent.com',
                iosClientId: '820048818141-s5kqc4ro98ooikdlfmktvr6u5pldrns7.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });
            if(result.type==='success'){
                return result.accessToken;
            }else{
                return {cancelled: true};
            }
            }catch (e){
                return {error: true};
            }
            
        }
    
    
    render() {
        return (
            <View style={styles.container}>
                <Button title='Iniciar sesión con Google'
                        onPress={() => this.signInWithGoogleAsync()}/>
                <Button style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.loginWithFacebook()}
          title="iniciar sesión con Facebook">
          Entrar con Facebook
        </Button>
            </View>
        );
    }
}


export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});