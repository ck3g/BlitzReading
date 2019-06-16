import React from 'react';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Button } from '../components/common';

import i18n from '../i18n';

import enWords from '../locales/words.en.json';
import deWords from '../locales/words.de.json';
import shuffle from '../shuffle';

const PRACTICE_TIME = 5 * 1000;

class PracticeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = { totalWords: 0, timerId: null }

    this.onPressNextWord = this.onPressNextWord.bind(this);
  }

  componentDidMount() {
    this.startPracticeSession();
  }

  componentDidUpdate(prevProps) {
    const { timerId } = this.state;
    const { isFocused } = this.props;
    const wasFocused = prevProps.isFocused;
    const screenLostFocus = wasFocused && !isFocused && timerId;
    const screenGotFocus = !wasFocused && isFocused && !timerId;

    if (screenLostFocus) {
      this.resetTimer(timerId);
    }

    if (screenGotFocus) {
      this.startPracticeSession();
    }
  }

  startPracticeSession() {
    const timerId = setTimeout(() => (
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
      totalWords: 0,
      timerId
    });
  }

  resetTimer(timerId) {
    clearTimeout(timerId);
    this.setState({ timerId: null });
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
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{this.state.currentWord}</Text>
        </View>
        <View style={styles.nextButtonContainer}>
          <Button onPress={this.onPressNextWord} >
            {i18n.t("practice.next_word")}
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wordContainer: {
    heigh: 50,
    marginTop: 'auto',
    paddingTop: 50,
    alignSelf: 'center',
    width: '95%'
  },
  word: {
    marginBottom: 30,
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },
  nextButtonContainer: {
    marginTop: 'auto',
    width: '95%',
    marginBottom: 30
  }
};

export default withNavigationFocus(PracticeScreen);
