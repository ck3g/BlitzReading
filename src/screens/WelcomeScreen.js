import React, { Component } from 'react';
import { Text, View } from 'react-native';
import i18n from '../i18n';
import { Button } from '../components/common';

import styles from '../styles';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View>
          <Text style={[styles.welcome, { marginBottom: 30 }]}>
            {i18n.t('home.welcome', { appName: i18n.t('appName')})}
          </Text>
          <Button onPress={() => this.props.navigation.navigate('Practice')}>
            {i18n.t('home.start_practice')}
          </Button>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;