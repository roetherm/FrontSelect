import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { User } from '../models/user.model';
import { userReducer } from './user';

export interface State {
  readonly user: User;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
