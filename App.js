import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import styles from './src/styles';
import PracticeScreen from './src/screens/PracticeScreen';
import ResultsScreen from './src/screens/ResultsScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome to Blitz Reading!</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Practice')}
            title="Practice"
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  App: App,
  Practice: PracticeScreen,
  Results: ResultsScreen
});

export default createAppContainer(AppNavigator);
