import { User } from '../interfaces/User';
import { userReducer } from './user/user';

export interface AppState {
  user: User,
}

export const reducers = {
  user: userReducer,
}
