/*
  The implementation of the Fisher-Yates shuffle algorithm
  https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
*/

export default shuffle = (initialArray) => {
  let array = [...initialArray]; // Prevent changing the initial array

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }

  return array;
};
