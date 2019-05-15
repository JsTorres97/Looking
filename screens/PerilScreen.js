import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import * as firebase from 'firebase';

class PerfilScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Bienvenido {firebase.auth().currentUser.displayName}</Text>
                <Image
                style={{width: 172, height: 172}}
                source={{url: firebase.auth().currentUser.photoURL}}
                />
            </View>
        );
    }
}
export default PerfilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});