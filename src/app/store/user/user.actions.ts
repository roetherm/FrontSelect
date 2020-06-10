import { Action } from '@ngrx/store';

export enum UserActions {
  CHECK_USER = '[Auth] Check user',
  AUTHENTICATED = '[Auth] Authenticated',
  NOT_AUTHENTICATED = '[Auth] Not Authenticated',

  GET_USERDATA = '[Auth] Get User Data',
  GET_USERDATA_SUCCESS = '[Auth] Get User Data Success',

  LOGIN = '[Auth] Normal login attempt',
  GOOGLE_LOGIN = '[Auth] Google login attempt',

  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout success',

  AUTH_ERROR = '[Auth] Error',
}

export class CheckUser implements Action {
  readonly type = UserActions.CHECK_USER;
  constructor(
    public payload?: any
  ) { }
}

export class Authenticated implements Action {
  readonly type = UserActions.AUTHENTICATED;
  constructor(
    public payload?: any
  ) { }
}

export class NotAuthenticated implements Action {
  readonly type = UserActions.NOT_AUTHENTICATED;
  constructor(
    public payload?: any
  ) { }
}

export class GetUserdata implements Action {
  readonly type = UserActions.GET_USERDATA;
  constructor(
    public payload?: any
  ) { }
}

export class GetUserdataSuccess implements Action {
  readonly type = UserActions.GET_USERDATA_SUCCESS;
  constructor(
    public payload?: any
  ) { }
}

export class GoogleLogin implements Action {
  readonly type = UserActions.GOOGLE_LOGIN;
  constructor(
    public payload?: any
  ) { }
}

export class Login implements Action {
  readonly type = UserActions.LOGIN;
  constructor(
    public payload?: any
  ) { }
}

export class Logout implements Action {
  readonly type = UserActions.LOGOUT;
  constructor(
    public payload?: any
  ) { }
}

export class LogoutSuccess implements Action {
  readonly type = UserActions.LOGOUT_SUCCESS;
  constructor(
    public payload?: any
  ) { }
}

export class AuthError implements Action {
  readonly type = UserActions.AUTH_ERROR;
  constructor(
    public payload?: any
  ) { }
}
