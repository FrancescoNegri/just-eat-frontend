import React, { Component } from 'react';
import { ActivityIndicator, Button, ListView, Text, View } from 'react-native';
const config = require("../../../config.json");

export default class RestaurantMenuPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Categorie",
    });

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(this.props.navigation.state.params["menu"]),
        }, function () {
            // do something with new state
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
                    renderRow={(rowData) => <Button title={rowData["NAME"]} onPress={() => navigate("RestaurantMenuCategory", {
                        category: rowData
                    })} />}
                />
            </View>
        );
    }
}