import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    ListView
} from "react-native";
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem } from 'native-base';
import * as firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';
var data=[]

class ActividadesScreen extends Component {

    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2})

        this.state = {
            listViewData: data,
            newContact: ""
        }
    }

    componentDidMount(){
        var that = this 
        firebase.database().ref('/actividades').on('child_added',function(data){
            var newData = [...that.state.listViewData]
            newData.push(data)
            that.setState({listViewData: newData})
        })
    }

    addRow(data){
        var key = firebase.database().ref('/actividades').push().key
        firebase.database().ref('/actividades').child(key).set({name:data})

    }

    async deleteRow(secId, rowId, rowMap, data) {

        await firebase.database().ref('actividades/' + data.key).set(null)
    
        rowMap[`${secId}${rowId}`].props.closeRow();
        var newData = [...this.state.listViewData];
        newData.splice(rowId, 1)
        this.setState({ listViewData: newData });
    
      }
    

    showInformation(){

    }
    
    render() {
        return (
            <Container style={styles.container}>
                <Header style={{marginTop:StatusBar.currentHeight}}>
                <Text style={styles.text}>Organiza tu viaje</Text>
                    <Content>
                        <Item>
                            <Input
                                onChangeText={(newContact) => this.setState({newContact})}
                                placeholder="Agregar Actividad"
                            />
                            <Button onPress={()=>this.addRow(this.state.newContact)}>
                                <Icon name="add"/>
                            </Button>
                        </Item>
                    </Content>
                </Header>
                <Content>
                    <List
                        enableEmptySections
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data=>
                            <ListItem>
                                <Text>{data.val().name}</Text>
                            </ListItem>
                        }
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={()=>this.deleteRow(secId, rowId, rowMap, data)}>
                                <Icon name="trash"/>
                            </Button>
                        }
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}
export default ActividadesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
    text:{
        justifyContent: 'center'
    }
});