import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import RestaurantsListPage from './components/RestaurantsListPage';
import RestaurantDetailsPage from './components/RestaurantDetailsPage';
import RestaurantMenuPage from './components/RestaurantMenuPage';
import RestaurantMenuCategory from './components/RestaurantMenuCategoryPage';

const JustEatApp = StackNavigator({
  Home: { screen: HomePage },
  RestaurantsList: { screen: RestaurantsListPage },
  RestaurantDetails: { screen: RestaurantDetailsPage},
  RestaurantMenu: { screen: RestaurantMenuPage },
  RestaurantMenuCategory: { screen: RestaurantMenuCategory }
});

export default class App extends React.Component {
  render() {
    return <JustEatApp />;
  }
}
