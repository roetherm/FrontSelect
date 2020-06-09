import * as admin from 'firebase-admin';

import * as userFunctions from './userFunctions';
import * as ratingFunctions from './ratingFunctions';
import * as adminFunctions from './adminFunctions';

admin.initializeApp();

export const CreateUserInFirestore = userFunctions.CreateUserInFirestore;
export const RateData = ratingFunctions.RateData;
export const MakeUserAdmin = adminFunctions.MakeUserAdmin;
