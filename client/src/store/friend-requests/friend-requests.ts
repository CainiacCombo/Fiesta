import { FriendRequest } from '../../interfaces/FriendRequest';
import { FriendRequestsActions, FriendRequestsTypes } from './friend-requests.actions';
import { UserTypes, Logout } from '../user/user.actions';

export interface FriendRequestsState {
  from: Array<FriendRequest>
  to: Array<FriendRequest>
}

const defaultState = {
  from: [],
  to: [],
};

export function friendRequestsReducer(state = defaultState, action: FriendRequestsActions | Logout) {
  switch (action.type) {
    case FriendRequestsTypes.ADD_TO_FRIEND_REQUESTS:
      return {
        ...state,
        to: action.payload,
      };

    case FriendRequestsTypes.ADD_FROM_FRIEND_REQUESTS:
      return {
        ...state,
        from: action.payload,
      };

    case UserTypes.LOGOUT:
      return defaultState;

    default:
      return state;
  }
}
