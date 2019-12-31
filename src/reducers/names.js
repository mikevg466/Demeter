import update from 'immutability-helper';
import types from '../actions/types';
import { splitArray } from '../utils/array';

export const namesInitialState = {
  rawList: [],
  sortingList: [],
  currentSortList: [],
  finalList: [],
  firstName: '',
  secondName: '',
  mainIdx: 0,
  leftIdx: 0,
  rightIdx: 0,
  isSortingFinished: false,
  genderType: '',
};

/**
 * The main names reducer function to be exported
 * @param  {Object} [state=namesInitialState]
 *    The current names store to be manipulated.
 *    If null, then the default initial state.
 * @param  {Object} action
 *    The reducer action, containing the action type and data to be processed.
 * @return {Object} The updated names state.
 */
export default function namesReducer(state = namesInitialState, action) {
  switch (action.type) {
    case types.INITIALIZE_SORTING_LIST: {
      const sortingList = splitArray(state.rawList);
      return update(state, {
        sortingList: { $set: sortingList },
      });
    }
    case types.RESET_NAMES:
      return update(state, {
        rawList: { $set: namesInitialState.rawList },
        sortingList: { $set: namesInitialState.sortingList },
        currentSortList: { $set: namesInitialState.currentSortList },
        finalList: { $set: namesInitialState.finalList },
        firstName: { $set: namesInitialState.firstName },
        secondName: { $set: namesInitialState.secondName },
        mainIdx: { $set: namesInitialState.mainIdx },
        leftIdx: { $set: namesInitialState.leftIdx },
        rightIdx: { $set: namesInitialState.rightIdx },
        isSortingFinished: { $set: namesInitialState.isSortingFinished },
      });
    case types.SET_GENDER_TYPE:
      return update(state, {
        genderType: { $set: action.genderType || '' },
      });
    case types.SET_NAMES:
      return update(state, {
        rawList: { $set: action.rawList || [] },
      });
    case types.SET_SELECTOR_NAMES: {
      const { sortingList, mainIdx, leftIdx, rightIdx, finalList } = state;
      if (!sortingList.length) return state;

      let nextFinalList = finalList;
      const isSortingFinished =
        !sortingList[mainIdx] || !sortingList[mainIdx + 1];

      let firstName;
      let secondName;
      if (!isSortingFinished) {
        firstName = sortingList[mainIdx][leftIdx];
        secondName = sortingList[mainIdx + 1][rightIdx];
      }
      if (isSortingFinished) {
        nextFinalList = sortingList[0].slice();
      }
      return update(state, {
        isSortingFinished: { $set: isSortingFinished },
        firstName: { $set: firstName || '' },
        finalList: { $set: nextFinalList },
        secondName: { $set: secondName || '' },
      });
    }
    case types.SORT_SELECTOR_NAMES: {
      const { compareValue, removeName } = action;
      let { leftIdx, rightIdx, mainIdx, sortingList, currentSortList } = state;
      currentSortList = currentSortList.slice();

      if (compareValue < 0) {
        if (!removeName) {
          currentSortList.push(sortingList[mainIdx][leftIdx]);
        }
        leftIdx++;
      } else if (compareValue > 0) {
        if (!removeName) {
          currentSortList.push(sortingList[mainIdx + 1][rightIdx]);
        }
        rightIdx++;
      }

      const isCurrentSortFinished =
        leftIdx >= sortingList[mainIdx].length ||
        rightIdx >= sortingList[mainIdx + 1].length;

      if (isCurrentSortFinished) {
        sortingList = sortingList.slice();

        if (leftIdx < sortingList[mainIdx].length) {
          currentSortList = [
            ...currentSortList,
            ...sortingList[mainIdx].slice(leftIdx),
          ];
        }
        if (rightIdx < sortingList[mainIdx + 1].length) {
          currentSortList = [
            ...currentSortList,
            ...sortingList[mainIdx + 1].slice(rightIdx),
          ];
        }

        sortingList.splice(mainIdx, 2, currentSortList.slice());
        currentSortList = [];
        mainIdx++;
        leftIdx = 0;
        rightIdx = 0;
        if (sortingList.length - mainIdx < 2) {
          mainIdx = 0;
        }
      }

      return update(state, {
        leftIdx: { $set: leftIdx },
        rightIdx: { $set: rightIdx },
        mainIdx: { $set: mainIdx },
        sortingList: { $set: sortingList },
        currentSortList: { $set: currentSortList },
      });
    }
    default:
      return state;
  }
}
