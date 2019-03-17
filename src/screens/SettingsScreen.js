import React, { Component } from 'react';
import {
  Keyboard,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import i18n from '../i18n';
import { Button } from '../components/common';

import LanguageSelectorScreen from './LanguageSelectorScreen';
import AboutScreen from './AboutScreen';
import { loadSettings, saveSettings } from '../storage/settingsStorage';
import SettingsList from '../components/SettingsList';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', locale: 'en' }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static navigationOptions = {
    title: i18n.t('navigation.settings')
  };

  async componentDidMount() {
    const initialState = await loadSettings();

    this.setState(initialState);
  }

  componentDidUpdate(prevProps, prevState) {
    const locale = this.props.navigation.getParam('locale', null);
    if (locale && prevState.locale !== locale) {
      i18n.locale = locale;
      this.setState({ locale });
    }
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleSubmit() {
    saveSettings(this.state);
  }

  render() {
    const currentLocale = this.state.locale;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={i18n.t('settings.name_placeholder')}
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.name}
              onChangeText={this.handleNameChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <SettingsList
              onPressItem={(screen) => navigation.navigate(screen, { currentLocale })}
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1, justifyContent: 'flex-end' }]}>
            <Button onPress={this.handleSubmit}>
              {i18n.t('settings.save_button')}
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const SettingsNavigator = createStackNavigator({
  Settings: SettingsScreen,
  LanguageSelector: LanguageSelectorScreen,
  About: AboutScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default SettingsNavigator;
