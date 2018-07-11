import { Action } from '@ngrx/store';
import { FriendRequest } from '../../interfaces/FriendRequest';

export enum FriendRequestsTypes {
  ADD_FRIEND_REQUESTS = '[Parties] ADD_FRIEND_REQUESTS',
}

export class AddFriendRequests implements Action {
  readonly type = FriendRequestsTypes.ADD_FRIEND_REQUESTS
  constructor(public payload: Array<FriendRequest>) { }
}

export type FriendRequestsActions = AddFriendRequests;
