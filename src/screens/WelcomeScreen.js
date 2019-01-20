import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import i18n from '../i18n';

import styles from '../styles';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>
            {i18n.t('home.welcome', { appName: i18n.t('appName')})}
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Practice')}
            title={i18n.t('home.start_practice')}
          />
        </View>
      </View>
    );
  }
}