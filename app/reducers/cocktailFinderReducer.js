import {FETCH_DRINKS_REQUEST, FETCH_DRINKS_SUCCESS} from '../constants';

const initialState = {
  drinks: [],
  isLoading: false,
};

const cocktailFinderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRINKS_REQUEST:
      return {...state, isLoading: true, drinks: []};
    case FETCH_DRINKS_SUCCESS:
      return {...state, isLoading: false, drinks: action.payload};
    default:
      return state;
  }
};

export default cocktailFinderReducer;
