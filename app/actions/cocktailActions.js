import {FETCH_DRINKS_REQUEST, FETCH_DRINKS_SUCCESS} from '../constants';
import {getCocktails} from '../services/cocktailFinderServices';

export const fetchDrinksRequest = () => {
  return {
    type: FETCH_DRINKS_REQUEST,
  };
};

export const fetchDrinksSuccess = drinks => {
  return {
    type: FETCH_DRINKS_SUCCESS,
    payload: drinks,
  };
};

export const searchDrinks = criteria => {
  const thunk = dispatch => {
    if (criteria.length > 2) {
      dispatch(fetchDrinksRequest());
      return getCocktails(criteria).then(drinks =>
        dispatch(fetchDrinksSuccess(drinks)),
      );
    } else {
      dispatch(fetchDrinksSuccess([]));
    }
  };

  thunk.meta = {
    debounce: {
      time: 500,
      key: FETCH_DRINKS_SUCCESS,
    },
  };

  return thunk;
};
