import { combineReducers } from 'redux';
import HighScoresReducer from './HighScoresReducer';

export default combineReducers({
  highScores: HighScoresReducer
});
