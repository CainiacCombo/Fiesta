import { User } from '../../interfaces/User';
import { UserActions, UserTypes } from './user.actions';

const defaultState: User = null;

export const userReducer = (state = defaultState, action: UserActions) => {
  switch (action.type) {
    case UserTypes.LOGIN:
      return action.payload;

    case UserTypes.UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    case UserTypes.LOGOUT:
      return defaultState;

    default:
      return state;
  }
}
