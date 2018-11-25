import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'HIGH_SCORES';

const parseHighScores = (highScores) =>
  JSON.parse(highScores).map((highScore) => {
    highScore.createdAt = new Date(highScore.createdAt)
    return highScore;
  });

export const fetchHighScores = async () => {
  try {
    let highScores = await AsyncStorage.getItem(STORAGE_KEY);

    if (highScores === null) { return []; }

    return parseHighScores(highScores);
  } catch (error) {
    console.log('Error fetching High Scores', error);
  }
}

export const saveHighScores = (highScores) => {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(highScores));
}

export const mergeHighScores = (highScores, totalWords) => {
  const score = {
    score: totalWords,
    createdAt: new Date()
  };

  return [...highScores, score];
}