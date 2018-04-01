
import { Action } from '../Store/reducers';

interface State {}

// Actions
export const PlaceholderAction = () => ({
  type: 'PLACEHOLDER_CONSTANT',
  payload: {}
});

// Action Handlers
const ACTION_HANDLERS = {
  ['PLACEHOLDER_CONSTANT']: (state: State, action: Action) => {
    const {} = action.payload;
    return {
      ...state
    };
  }
};

export default function UserReducer(state: State = {}, action: Action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
