import { Action } from '@ngrx/store';
import { FriendRequest } from '../../interfaces/FriendRequest';

export enum FriendRequestsTypes {
  ADD_TO_FRIEND_REQUESTS = '[Parties] ADD_TO_FRIEND_REQUESTS',
  ADD_FROM_FRIEND_REQUESTS = '[Parties] ADD_FROM_FRIEND_REQUESTS',
}

export class AddToFriendRequests implements Action {
  readonly type = FriendRequestsTypes.ADD_TO_FRIEND_REQUESTS
  constructor(public payload: Array<FriendRequest>) { }
}

export class AddFromFriendRequests implements Action {
  readonly type = FriendRequestsTypes.ADD_FROM_FRIEND_REQUESTS
  constructor(public payload: Array<FriendRequest>) { }
}

export type FriendRequestsActions = AddToFriendRequests | AddFromFriendRequests;
