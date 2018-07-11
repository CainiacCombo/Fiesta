import { User } from '../interfaces/User';
import { Party } from '../interfaces/Party';
import { FriendRequest } from '../interfaces/FriendRequest';

import { userReducer } from './user/user';
import { partiesReducer } from './parties/parties';
import { friendRequestsReducer } from './friend-requests/friend-requests';

export interface AppState {
  'user': User
  'parties': Party[]
  'friend-requests': FriendRequest[]
}

export const reducers = {
  'user': userReducer,
  'parties': partiesReducer,
  'friend-requests': friendRequestsReducer,
};
