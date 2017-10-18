import React, { Component } from 'react';
import { ActivityIndicator, Button, ListView, Text, View } from 'react-native';
const config = require("../../../config.json");

export default class RestaurantsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        return fetch(config["API_URL"] + '/restaurants')
            .then((response) => {
                if (response.status === 200) return response.json()
                else alert("API unreachable!");
            })
            .then((responseJson) => {
                if (responseJson) {
                    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                    this.setState({
                        isLoading: false,
                        dataSource: ds.cloneWithRows(responseJson["RESTAURANTS"]),
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
        const { navigate } = this.props.navigation;
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
                    renderRow={(rowData) => <Button title={rowData["NAME"]} onPress={() => {
                        navigate('RestaurantDetails', { id: rowData["ID"] });
                    }} />}
                />
            </View>
        );
    }
}