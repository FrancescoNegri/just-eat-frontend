import React, { Component } from 'react';
import { ActivityIndicator, Button, ListView, Text, View } from 'react-native';
const config = require("../../../config.json");

export default class RestaurantMenuPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params["name"],
    });

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
                    this.setState({
                        isLoading: false,
                        data: responseJson
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
                <Text>{this.state["data"]["NAME"]}</Text>
                <Button title="Menù" onPress={() => {
                    navigate('RestaurantMenu', { menu: this.state.data["MENU"], name: this.state.data["NAME"] });
                }} />
            </View>
        );
    }
}