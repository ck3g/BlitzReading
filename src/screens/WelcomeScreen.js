import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../styles';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome to Blitz Reading!</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Practice')}
            title="Practice"
          />
        </View>
      </View>
    );
  }
}