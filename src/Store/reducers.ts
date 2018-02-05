import { combineReducers } from 'redux';
import PlaceHolderReducer from '../Ducks/PlaceHolderDucks';
import { ActionTypes } from '../Interfaces';

export default combineReducers({
  placeholder: PlaceHolderReducer
});

export interface Action {
  type: ActionTypes;
  payload: any;
  meta: Meta;
  error: any;
}

interface Meta {}
