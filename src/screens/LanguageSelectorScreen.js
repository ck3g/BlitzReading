import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

class LanguageSelectorScreen extends React.Component {
  static navigationOptions = {
    title: 'Language'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Language selector Screen</Text>
      </View>
    );
  }
}

export default LanguageSelectorScreen;
