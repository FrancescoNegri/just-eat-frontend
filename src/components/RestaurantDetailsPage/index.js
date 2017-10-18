import React, { Component } from 'react';
import { ActivityIndicator, Button, ListView, Text, View } from 'react-native';
const config = require("../../../config.json");

export default class RestaurantDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        return fetch(config['API_URL'] + '/restaurants/' + this.props.navigation.state.params["id"])
            .then((response) => {
                if (response.status === 200) return response.json()
                else alert("API unreachable!");
            })
            .then((responseJson) => {
                if (responseJson) {
                    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                    this.setState({
                        isLoading: false,
                        dataSource: ds.cloneWithRows(responseJson["MENU"]),
                    }, function () {
                        // do something with new state
                    });
                }
                else {
                    navigate('Home');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Button title={rowData["NAME"]} onPress={() => alert(rowData["DESCRIPTION"])} />}
                />
            </View>
        );
    }
}