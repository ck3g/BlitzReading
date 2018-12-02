import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../styles';
import { fetchHighScores } from '../storage/highScoreStorage';
import HighScores from '../components/HighScores';

export default class HighScoresScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { highScores: [] };
  }

  async componentDidMount() {
    try {
      let highScores = await fetchHighScores();

      this.setState({ highScores });
    } catch (error) {
      console.log('Error fetching High Scores', error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <HighScores data={this.state.highScores} totalNumber={25} />
      </View>
    );
  }
}