import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ClimaScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ClimaScreen</Text>
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