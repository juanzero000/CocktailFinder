import {createStore, applyMiddleware} from 'redux';
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';
import cocktailFinderReducer from './reducers/cocktailFinderReducer';

const store = createStore(
  cocktailFinderReducer,
  applyMiddleware(createDebounce(), thunk),
);

export default store;
