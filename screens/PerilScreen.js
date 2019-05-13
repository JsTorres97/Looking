import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PerfilScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PerfilScreen</Text>
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