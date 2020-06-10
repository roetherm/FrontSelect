import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';


import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

import {
  UserActions,
  Authenticated,
  GetUserdata,
  GetUserdataSuccess,
  LogoutSuccess,
  AuthError
 } from './user.actions';


@Injectable()
export class UserEffects {
  uid: string;

  constructor(
    private actions: Actions,
    private userService: UserService,
    private router: Router,
    private store: Store<any>,
  ) {}

  // Check if user is already logged in
  @Effect()
  checkUser: Observable<Action> = this.actions.pipe(
    ofType(
      UserActions.CHECK_USER
    ),
    mergeMap(() => {
      return this.userService.checkUser()
      .pipe(
        map((response) => {
          if (response) {
            this.uid = response.uid;
            return new GetUserdata();
          } else {
            this.router.navigate(['/login']);
            return new AuthError();
          }
        }),
        catchError((error) => {
          return of(new AuthError(error));
        })
      );
    })
  );

  @Effect()
  getUserData: Observable<Action> = this.actions.pipe(
    ofType(
      UserActions.GET_USERDATA
    ),
    mergeMap(() => {
      return this.userService.getUserdata(this.uid)
      .pipe(
        map((response) => {
          if (response) {
            // Received user data
            if (response.length === 1) {
              return new GetUserdataSuccess(response[0]);
            } else {
              return new AuthError();
            }
          } else {
            return new AuthError();
          }
        }),
        catchError((error) => {
          return of(new AuthError(error));
        })
      );
    })
  );

  // Login with Google OAuth
  @Effect()
  googleLogin: Observable<Action> = this.actions.pipe(
    ofType(
      UserActions.GOOGLE_LOGIN
    ),
    mergeMap(() => {
      return this.userService.loginUser()
      .pipe(
        map(() => {
          // Login was successfull
          return new Authenticated();
        }),
        catchError((error) => {
          return of(new AuthError(error));
        })
      );
    })
  );

  // Login
  @Effect()
  login: Observable<Action> = this.actions.pipe(
    ofType(
      UserActions.LOGIN
    ),
    mergeMap(() => {
      let email = '';
      let password = '';
      this.store.select('user').subscribe(data => {
        email = data.email;
        password = data.password;
      });
      return this.userService.loginUserNormal(email, password)
      .pipe(
        map(() => {
          // Login was successfull
          return new Authenticated();
        }),
        catchError((error) => {
          return of(new AuthError(error));
        })
      );
    })
  );

  // Logout user
  @Effect()
  logout: Observable<Action> = this.actions.pipe(
    ofType(
      UserActions.LOGOUT
    ),
    mergeMap(() => {
      return this.userService.logoutUser()
      .pipe(
        map(() => {
          this.router.navigate(['/login']);
          return new LogoutSuccess();
        }),
        catchError((error) => {
          return of(new AuthError(error));
        })
      );
    })
  );
}
