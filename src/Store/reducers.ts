import { combineReducers } from 'redux';
import PlaceHolderReducer from '../Ducks/PlaceHolderDucks';

export default combineReducers({
  placeholder: PlaceHolderReducer
});

export interface Action {
  type: any;
  payload: any;
  meta: Meta;
  error: any;
}

interface Meta {}
