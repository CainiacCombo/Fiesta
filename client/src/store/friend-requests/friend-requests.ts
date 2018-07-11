import { FriendRequest } from '../../interfaces/FriendRequest';
import { FriendRequestsActions, FriendRequestsTypes } from './friend-requests.actions';
import { UserTypes, Logout } from '../user/user.actions';

const defaultState: Array<FriendRequest> = [];

export const friendRequestsReducer = (state = defaultState, action: FriendRequestsActions | Logout) => {
  switch (action.type) {
    case FriendRequestsTypes.ADD_FRIEND_REQUESTS:
      return action.payload;

    case UserTypes.LOGOUT:
      return defaultState;

    default:
      return state;
  }
}
