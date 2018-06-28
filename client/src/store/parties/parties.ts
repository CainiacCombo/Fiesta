import { PartiesActions, PartiesTypes } from './parties.actions';

const defaultState = [];

export const partiesReducer = (state = defaultState, action: PartiesActions) => {
  switch (action.type) {
    case PartiesTypes.ADD_USER_PARTIES:
      return action.payload

    default:
      return state;
  }
}
