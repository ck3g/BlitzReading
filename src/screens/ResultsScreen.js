import React from 'react';
import { Button, View, Text } from 'react-native';
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
          <Text style={styles.welcome}>Results</Text>
          <Text style={styles.results}>
            Words count: {this.state.totalWords}
          </Text>
          <HighScores data={this.state.highScores} />
          <Button
            onPress={() => navigation.navigate('Practice')}
            title="Practice Again"
          />
        </View>
      </View>
    );
  }
}
