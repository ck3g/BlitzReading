import React from 'react';
import { Text, View } from 'react-native';

import SettingsListItem from './SettingsListItem';

const settings = [
  {
    name: 'Display language'
  },
  {
    name: 'About'
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
            />
          ))
        }
      </View>
    );
  }
};

export default SettingsList;