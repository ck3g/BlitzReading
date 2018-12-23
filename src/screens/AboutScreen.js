import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About'
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
