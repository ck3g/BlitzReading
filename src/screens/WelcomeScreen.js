import React, { Component } from 'react';
import { Text, View } from 'react-native';
import i18n from '../i18n';
import { Button } from '../components/common';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessage}>
            {i18n.t('home.welcome', { appName: i18n.t('appName')})}
          </Text>
        </View>
        <View style={styles.practiceButtonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Practice')}>
            {i18n.t('home.start_practice')}
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
  welcomeMessageContainer: {
    heigh: 50,
    marginTop: 'auto',
    paddingTop: 50,
    alignSelf: 'center',
    width: '95%'
  },
  welcomeMessage: {
    marginBottom: 30,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  practiceButtonContainer: {
    marginTop: 'auto',
    width: '95%',
    marginBottom: 30
  }
}

export default WelcomeScreen;
