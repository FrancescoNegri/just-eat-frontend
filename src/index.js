import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import RestaurantsListPage from './components/RestaurantsListPage';

const JustEatApp = StackNavigator({
  Home: { screen: HomePage },
  RestaurantsList: { screen: RestaurantsListPage },
});

export default class App extends React.Component {
  render() {
    return <JustEatApp />;
  }
}