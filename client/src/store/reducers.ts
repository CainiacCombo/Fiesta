import { User } from '../interfaces/User';
import { Party } from '../interfaces/Party';

import { userReducer } from './user/user';
import { partiesReducer } from './parties/parties';
import { friendsReducer } from './friends/friends';
import { friendRequestsReducer, FriendRequestsState } from './friend-requests/friend-requests';

export interface AppState {
  'user': User
  'parties': Party[]
  'friends': User[]
  'friend-requests': FriendRequestsState
}

export const reducers = {
  'user': userReducer,
  'parties': partiesReducer,
  'friends': friendsReducer,
  'friend-requests': friendRequestsReducer,
};
