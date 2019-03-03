import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import i18n from '../i18n';
import { loadSettings } from '../storage/settingsStorage';
import { fetchHighScores } from '../storage/highScoreStorage';
import { updateHighScores } from '../actions';

class SplashScreen extends React.Component {
  async componentDidMount() {
    const settings = await loadSettings();
    const highScores = await fetchHighScores();

    if (settings !== null) {
      i18n.locale = settings.locale;
      this.props.navigation.navigate('App');
    }

    if (highScores !== null) {
      this.props.updateHighScores(highScores);
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Blitz Reading
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

const mapDispatchToProps = ({ updateHighScores });

export default connect(null, mapDispatchToProps)(SplashScreen);
