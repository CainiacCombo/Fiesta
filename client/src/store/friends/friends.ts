import { User } from '../../interfaces/User';
import { FriendsActions, FriendsTypes } from './friends.actions';
import { UserTypes, Logout } from '../user/user.actions';

const defaultState: Array<User> = [];

export function friendsReducer(state = defaultState, action: FriendsActions | Logout) {
  switch (action.type) {
    case FriendsTypes.ADD_FRIENDS:
      return action.payload;

    case UserTypes.LOGOUT:
      return defaultState;

    default:
      return state;
  }
}
