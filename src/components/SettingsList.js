import React from 'react';
import { Text, View } from 'react-native';

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
            <Text key={item.name}>{item.name}</Text>
          ))
        }
      </View>
    );
  }
};

export default SettingsList;