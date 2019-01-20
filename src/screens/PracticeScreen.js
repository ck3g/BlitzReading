import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../styles';

import i18n from '../i18n';

import enWords from '../words.en.json';
import deWords from '../words.de.json';
import shuffle from '../shuffle';

const PRACTICE_TIME = 5 * 1000;

export default class PracticeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = { totalWords: 0 }

    this.onPressNextWord = this.onPressNextWord.bind(this);
  }

  componentDidMount() {
    setTimeout(() => (
      this.props.navigation.navigate('Results', {
        totalWords: this.state.totalWords
      })
    ), PRACTICE_TIME);

    const allWords = i18n.locale == 'de' ? deWords : enWords;

    const words = shuffle(allWords);
    const currentWord = words.shift();

    this.setState({
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

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.word}>{this.state.currentWord}</Text>
          <Button
            onPress={this.onPressNextWord}
            title="Next Word"
          />
        </View>
      </View>
    );
  }
}
