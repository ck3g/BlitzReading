/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import styles from './src/styles';
import allWords from './src/words.en.json';
import shuffle from './src/shuffle';

const PRACTICE_TIME = 10 * 1000;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentScreen: 'welcome', totalWords: 0 };

    this.onPressPractice = this.onPressPractice.bind(this);
    this.onPressNextWord = this.onPressNextWord.bind(this);
  }

  onPressPractice() {
    setTimeout(() => (
      this.setState({ currentScreen: 'results' })
    ), PRACTICE_TIME);

    const words = shuffle(allWords);
    const currentWord = words.shift();

    this.setState({
      currentScreen: 'practice',
      currentWord,
      words,
      totalWords: 0
    });
  }

  onPressNextWord() {
    const { words, totalWords } = this.state;
    const nextWord = words.shift()

    this.setState({
      currentWord: nextWord,
      words,
      totalWords: totalWords + 1
    })
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
        <Text style={styles.word}>{this.state.currentWord}</Text>
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
        <Text style={styles.results}>Words count: {this.state.totalWords}</Text>
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
