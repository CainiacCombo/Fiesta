import { Action } from '@ngrx/store';
import { User } from '../../interfaces/User';

export enum UserTypes {
  LOGIN = '[User] LOGIN',
  UPDATE = '[User] UPDATE',
  LOGOUT = '[User] LOGOUT',
}

export class Login implements Action {
  readonly type = UserTypes.LOGIN
  constructor(public payload: User) { }
}

export class Update implements Action {
  readonly type = UserTypes.UPDATE
  constructor(public payload: User) { }
}

export class Logout implements Action {
  readonly type = UserTypes.LOGOUT
  constructor() { }
}

export type UserActions = Login | Update | Logout;
