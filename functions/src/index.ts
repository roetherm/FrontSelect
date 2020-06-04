import * as admin from 'firebase-admin';

import * as userFunctions from './userFunctions';
import * as ratingFunctions from './ratingFunctions';

admin.initializeApp();

export const CreateUserInFirestore = userFunctions.CreateUserInFirestore;
export const RateData = ratingFunctions.RateData;
