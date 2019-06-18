import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { updateHighScores } from '../actions';
import { Button } from '../components/common';

import i18n from '../i18n';
import styles from '../styles';
import {
  fetchHighScores,
  mergeHighScores,
  saveHighScores
} from '../storage/highScoreStorage';
import HighScores from '../components/HighScores';

class ResultsScreen extends React.Component {
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

    this.props.updateHighScores([{ score: totalWords, createdAt: new Date() }]);
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
          <HighScores data={this.props.highScores} />
          <Button onPress={() => navigation.navigate('Practice')}>
            <Icon name="play" size={22} />
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ highScores }) => ({
  highScores
});

const mapDispachToProps = ({ updateHighScores });

export default connect(mapStateToProps, mapDispachToProps)(ResultsScreen);
