import { Action } from '@ngrx/store';
import { UserActions } from './user.actions';
import { User } from '../../models/user.model';

const initialState: User = {
  key: '',
  uid: '',
  email: '',
  displayName: '',
  phoneNumber: '',
  photoURL: '',
};

export function userReducer(
  state = initialState,
  action: Action | any,
): User {
  switch (action.type) {
    case UserActions.CHECK_USER: {
      return {
        ...state,
        loading: true,
        };
    }
    case UserActions.AUTHENTICATED: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActions.NOT_AUTHENTICATED: {
      return {
        ...state,
        ...initialState,
        loading: false,
      };
    }
    case UserActions.GET_USERDATA: {
      return {
        ...state,
      };
    }
    case UserActions.GET_USERDATA_SUCCESS: {
      return {
        ...state,
        uid: action.payload.id,
        key: action.payload.key,
        email: action.payload.email,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
        phoneNumber: action.payload.phoneNumber,
        loading: false,
      };
    }
    case UserActions.GOOGLE_LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActions.LOGOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        ...initialState,
        loading: false,
      };
    }
    case UserActions.AUTH_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
