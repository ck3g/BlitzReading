import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'SETTINGS';

const DEFAULT_SETTINGS = {
  name: ''
};

export const loadSettings = async () => {
  try {
    let settings = await AsyncStorage.getItem(STORAGE_KEY);

    if (settings === null) { return DEFAULT_SETTINGS; }

    return JSON.parse(settings);
  } catch (error) {
    console.log('Error loading settings', error);
  }
}

export const saveSettings = (settings) => {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
