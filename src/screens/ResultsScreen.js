import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../styles';

export default class ResultsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Results</Text>
          <Text style={styles.results}>
            Words count: {navigation.getParam('totalWords', 0)}
          </Text>
          <Button
            onPress={() => navigation.navigate('Practice')}
            title="Practice Again"
          />
        </View>
      </View>
    );
  }
}
