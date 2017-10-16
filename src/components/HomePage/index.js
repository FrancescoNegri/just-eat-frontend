import React from 'react'
import { Button, View, Text } from 'react-native'
import style from './style'

export default class HomePage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={style.container}>
                <Text style={style.title}>Benvenuto in Just Eat</Text>
                <Button
                    onPress={() => navigate('RestaurantsList', { restaurants: ['Da Peppino', 'Claudio', 'Maremma mia'] })}
                    title="Cerca ristoranti"
                />
            </View>
        );
    }
}