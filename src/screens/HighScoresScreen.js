import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../styles';

export default class HighScoresScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>High Scores</Text>
        </View>
      </View>
    );
  }
}