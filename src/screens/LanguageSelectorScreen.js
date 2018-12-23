import React from 'react';
import { View } from 'react-native';

import LanguageListItem from '../components/LanguageListItem';

const languages = [
  {
    locale: 'en',
    name: 'English'
  },
  {
    locale: 'de',
    name: 'Deutsch',
    englishName: 'German'
  }
];

class LanguageSelectorScreen extends React.Component {
  static navigationOptions = {
    title: 'Language'
  };

  render() {
    return (
      <View style={{ marginTop: 15 }}>
        {
          languages.map((language) => (
            <LanguageListItem
              key={language.locale}
              isActive={language.locale === 'de'}
              name={language.name}
              englishName={language.englishName}
            />
          ))
        }
      </View>
    );
  }
}

export default LanguageSelectorScreen;
