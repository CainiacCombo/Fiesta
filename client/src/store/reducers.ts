import { User } from '../interfaces/User';
import { Party } from '../interfaces/Party';

import { userReducer } from './user/user';
import { partiesReducer } from './parties/parties';

export interface AppState {
  user: User,
  parties: Party[],
}

export const reducers = {
  user: userReducer,
  parties: partiesReducer,
}
