import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SettingsListItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{this.props.title}</Text>
        <Icon style={styles.icon} name="ios-arrow-forward" size={25} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#434343',
    width: '90%'
  },
  icon: {
    color: '#CCCCCC',
    paddingLeft: 5
  }
});

export default SettingsListItem;
