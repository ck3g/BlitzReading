import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonContainerStyle, buttonStyle, textStyle } = styles;

  return (
    <View style={buttonContainerStyle}>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonContainerStyle: {
    height: 50
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 13,
    paddingBottom: 13
  }
};

export { Button };