import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDaLc4Vr47cF0pjQnhREV5eEKwXVXbuHRM",
  authDomain: "looking-29456.firebaseapp.com",
  databaseURL: "https://looking-29456.firebaseio.com",
  projectId: "looking-29456",
  storageBucket: "looking-29456.appspot.com",
  messagingSenderId: "820048818141",
  appId: "1:820048818141:web:230c9f15095ca757"
};
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
}

  async loginWithFacebook(){
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('609042169609691', { permissions: ['public_profile'] })
    if(type=='success'){
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error)=>{
        console.log(error)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Looking La app para viajeros</Text>
        <Button style={{ marginTop: 10 }}
          full
          rounded
          success
          onPress={() => this.loginWithFacebook()}
          title="Entrar con facebook">
          Entrar con Facebook
          </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
