import { Action } from '@ngrx/store';
import { Party } from '../../interfaces/Party';

export enum PartiesTypes {
  ADD_USER_PARTIES = '[Parties] ADD_USER_PARTIES',
}

export class AddUserParties implements Action {
  readonly type = PartiesTypes.ADD_USER_PARTIES
  constructor(public payload: Array<Party>) { }
}

export type PartiesActions = AddUserParties;
