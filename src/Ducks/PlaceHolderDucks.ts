import storeSchema from '../initialSchema';
import { Action } from '../Store/reducers';
import { PLACEHOLDER_CONSTANT } from '../constants';

interface State {}

const initialState = storeSchema.placeholder;

// Actions
export const PlaceholderAction = () => ({
  type: PLACEHOLDER_CONSTANT,
  payload: {}
});

// Action Handlers
const ACTION_HANDLERS = {
  [PLACEHOLDER_CONSTANT]: (state: State, action: Action) => {
    const {} = action.payload;
    return {
      ...state
    };
  }
};

export default function UserReducer(state: State = initialState, action: Action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
