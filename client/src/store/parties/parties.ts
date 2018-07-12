import { Party } from '../../interfaces/Party';
import { PartiesActions, PartiesTypes } from './parties.actions';
import { UserTypes, Logout } from '../user/user.actions';

const defaultState: Array<Party> = [];

export function partiesReducer(state = defaultState, action: PartiesActions | Logout) {
  switch (action.type) {
    case PartiesTypes.ADD_USER_PARTIES:
      return action.payload;

    case UserTypes.LOGOUT:
      return defaultState;

    default:
      return state;
  }
}
