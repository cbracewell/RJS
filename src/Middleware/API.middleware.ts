import { ActionTypes } from '../Interfaces';
import { Action } from '../Store/reducers';

const API = ({ dispatch, getState }: any) => (next: any) => (
  action: Action
) => {
  if (action.type !== ActionTypes.API) {
    return next(action);
  }

  return next(action);
};

export default API;
