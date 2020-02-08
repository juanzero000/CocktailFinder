import {FETCH_DRINKS_REQUEST, FETCH_DRINKS_SUCCESS} from '../constants';

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
      return fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${criteria}`,
      )
        .then(res => res.json())
        .then(data =>
          dispatch(
            fetchDrinksSuccess(
              (data.drinks || []).map(d => {
                return {id: d.idDrink, name: d.strDrink, img: d.strDrinkThumb};
              }),
            ),
          ),
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
