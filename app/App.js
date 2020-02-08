import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Welcome} from './views/welcome';
import {CocktailFinder} from './views/cocktail-finder';
import {Provider} from 'react-redux';
import store from './store';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      WelcomeScreen: {screen: Welcome},
      CocktailFinderScreen: {screen: CocktailFinder},
    },
    {
      headerMode: 'none',
      initialRouteName: 'WelcomeScreen',
    },
  ),
);

export default () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
