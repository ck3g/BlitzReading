export const updateHighScores = (highScores) => {
  return {
    type: 'HIGHSCORES_UPDATED',
    payload: highScores
  }
};
