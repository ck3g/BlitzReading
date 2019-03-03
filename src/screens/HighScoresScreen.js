import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import { fetchHighScores } from '../storage/highScoreStorage';
import HighScores from '../components/HighScores';

class HighScoresScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HighScores data={this.props.highScores} totalNumber={25} />
      </View>
    );
  }
}

const mapStateToProps = ({ highScores }) => ({
  highScores
});

export default connect(mapStateToProps, {})(HighScoresScreen);