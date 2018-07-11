import { Action } from '@ngrx/store';
import { User } from '../../interfaces/User';

export enum FriendsTypes {
  ADD_FRIENDS = '[Friends] ADD_FRIENDS',
}

export class AddFriends implements Action {
  readonly type = FriendsTypes.ADD_FRIENDS
  constructor(public payload: Array<User>) { }
}

export type FriendsActions = AddFriends;
