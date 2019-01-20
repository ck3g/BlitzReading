import React from 'react';
import { Text, View } from 'react-native';
import i18n from '../i18n';

import SettingsListItem from './SettingsListItem';

const settings = [
  {
    name: i18n.t('settings.display_language'),
    screen: 'LanguageSelector'
  },
  {
    name: i18n.t('settings.about'),
    screen: 'About'
  }
];

class SettingsList extends React.Component {
  render() {
    return (
      <View>
        {
          settings.map((item) => (
            <SettingsListItem
              key={item.name}
              title={item.name}
              onPress={() => this.props.onPressItem(item.screen)}
            />
          ))
        }
      </View>
    );
  }
};

export default SettingsList;