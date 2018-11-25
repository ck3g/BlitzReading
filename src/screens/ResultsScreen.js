import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../styles';

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalWords: 0
    };
  }

  componentDidMount() {
    this.setState({
      totalWords: this.props.navigation.getParam('totalWords', 0)
    })
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Results</Text>
          <Text style={styles.results}>
            Words count: {this.state.totalWords}
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
