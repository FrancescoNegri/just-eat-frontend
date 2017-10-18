import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import RestaurantsListPage from './components/RestaurantsListPage';
import RestaurantDetailsPage from './components/RestaurantDetailsPage';

const JustEatApp = StackNavigator({
  Home: { screen: HomePage },
  RestaurantsList: { screen: RestaurantsListPage },
  RestaurantDetails: { screen: RestaurantDetailsPage}
});

export default class App extends React.Component {
  render() {
    return <JustEatApp />;
  }
}