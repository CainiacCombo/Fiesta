import { User } from '../interfaces/User';
import { Party } from '../interfaces/Party';
import { FriendRequest } from '../interfaces/FriendRequest';

import { userReducer } from './user/user';
import { partiesReducer } from './parties/parties';
import { friendsReducer } from './friends/friends';
import { friendRequestsReducer } from './friend-requests/friend-requests';

export interface AppState {
  'user': User
  'parties': Party[]
  'friends': User[]
  'friend-requests': FriendRequest[]
}

export const reducers = {
  'user': userReducer,
  'parties': partiesReducer,
  'friends': friendsReducer,
  'friend-requests': friendRequestsReducer,
};
