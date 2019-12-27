/**
 * Swaps array value at index i with array value at index j
 * @param  {Array}  [array=[]] Array to mutate with swap changes
 * @param  {Number} [i=0]      Index of first value to swap
 * @param  {Number} [j=0]      Index of second value to swap
 * @return {undefined}
 */
const _swap = (array = [], i = 0, j = 0) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

/**
 * Copies an array and shuffles the value returning a shuffled version of the
 *  original array
 * @param  {Array}  [array=[]] Array to copy then shuffle
 * @return {Array}            A copied/shuffled version of the passed array
 */
export const shuffle = (array = []) => {
  array = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const swapIdx = Math.floor(Math.random() * i);
    _swap(array, i, swapIdx);
  }
  return array;
};
