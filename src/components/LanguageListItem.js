import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class LanguageListItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <View style={styles.textWrapper}>
          <Text style={[
            styles.title, (this.props.isActive && styles.active)
          ]}>
            {this.props.name}
          </Text>
          {
            this.props.englishName &&
              <Text style={styles.subtitle}>{this.props.englishName}</Text>
          }
        </View>
        {
          this.props.isActive &&
            <Icon
              style={styles.active}
              name="ios-checkmark-circle-outline"
              size={30}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  textWrapper: {
    width: '90%',
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    color: '#434343'
  },
  subtitle: {
    color: '#AAAAAA'
  },
  active: {
    color: '#03a87c'
  }
});

export default LanguageListItem;