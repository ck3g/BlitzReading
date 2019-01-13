import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import WelcomeScreen from './src/screens/WelcomeScreen';
import PracticeScreen from './src/screens/PracticeScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import HighScoresScreen from './src/screens/HighScoresScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';

const HomeNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Practice: PracticeScreen,
  Results: ResultsScreen
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />
      }
    },
    HighScores: {
      screen: HighScoresScreen,
      navigationOptions: {
        tabBarLabel: 'High Scores',
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="chart-bar" size={horizontal ? 20 : 25} color={tintColor} />
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="cogs" size={horizontal ? 20 : 25} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray'
    }
  }
);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator
});

export default createAppContainer(InitialNavigator);
