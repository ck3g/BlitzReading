import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';
import i18n from '../i18n';

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: i18n.t('settings.about')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
      </View>
    );
  }
}

export default AboutScreen;
