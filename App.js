/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentScreen: 'welcome' };

    this.onPressPractice = this.onPressPractice.bind(this);
    this.onPressNextWord = this.onPressNextWord.bind(this);
  }

  onPressPractice() {
    this.setState({ currentScreen: 'practice' });
  }

  onPressNextWord() {
    this.setState({ currentScreen: 'results' });
  }

  renderWelcomeScreen() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to Blitz Reading!</Text>
        <Button
          onPress={this.onPressPractice}
          title="Practice"
        />
      </View>
    );
  }

  renderPracticeScreen() {
    return (
      <View>
        <Text style={styles.word}>word</Text>
        <Button
          onPress={this.onPressNextWord}
          title="Next Word"
        />
      </View>
    );
  }

  renderResultsScreen() {
    return (
      <View>
        <Text style={styles.welcome}>Results</Text>
        <Text style={styles.results}>Words count: 0</Text>
        <Button
          onPress={this.onPressPractice}
          title="Practice Again"
        />
      </View>
    );
  }

  render() {
    const { currentScreen } = this.state;
    return (
      <View style={styles.container}>
        { currentScreen === 'welcome' && this.renderWelcomeScreen() }
        { currentScreen === 'practice' && this.renderPracticeScreen() }
        { currentScreen === 'results' && this.renderResultsScreen() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  word: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  results: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
  },
});