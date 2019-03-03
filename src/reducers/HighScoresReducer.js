const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HIGHSCORES_UPDATED':
      return [...state, ...action.payload];
    default:
      return state;
  }
};
