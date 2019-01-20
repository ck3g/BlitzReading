import React from 'react';
import { Button, View, Text } from 'react-native';
import i18n from '../i18n';
import styles from '../styles';
import {
  fetchHighScores,
  mergeHighScores,
  saveHighScores
} from '../storage/highScoreStorage';
import HighScores from '../components/HighScores';

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalWords: 0, highScores: [] };
  }

  async updateHighScores(totalWords) {
    try {
      let highScores = await fetchHighScores();
      highScores = mergeHighScores(highScores, totalWords);
      saveHighScores(highScores);

      this.setState({ highScores });

      console.log('High Scores', this.state.highScores);
    } catch (error) {
      console.log('Error fetching High Scores', error);
    }
  }

  componentDidMount() {
    const totalWords = this.props.navigation.getParam('totalWords', 0);
    this.setState({ totalWords });

    this.updateHighScores(totalWords);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>{i18n.t('results.title')}</Text>
          <Text style={styles.results}>
            {i18n.t('results.words_count')}: {this.state.totalWords}
          </Text>
          <HighScores data={this.state.highScores} />
          <Button
            onPress={() => navigation.navigate('Practice')}
            title={i18n.t('results.practice_again')}
          />
        </View>
      </View>
    );
  }
}
