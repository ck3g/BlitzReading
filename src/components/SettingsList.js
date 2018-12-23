import React from 'react';
import { Text, View } from 'react-native';

import SettingsListItem from './SettingsListItem';

const settings = [
  {
    name: 'Display language',
    screen: 'LanguageSelector'
  },
  {
    name: 'About',
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