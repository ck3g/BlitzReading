import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import WelcomeScreen from './src/screens/WelcomeScreen';
import PracticeScreen from './src/screens/PracticeScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import HighScoresScreen from './src/screens/HighScoresScreen';
import SettingsScreen from './src/screens/SettingsScreen';

class App extends React.Component {
  render() {
    return <HomeNavigator />
  }
}

const HomeNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Practice: PracticeScreen,
  Results: ResultsScreen
});

const AppNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  HighScores: HighScoresScreen,
  Settings: SettingsScreen
});

export default createAppContainer(AppNavigator);
