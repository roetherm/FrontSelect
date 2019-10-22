import * as admin from 'firebase-admin';

import * as userFunctions from './userFunctions';

admin.initializeApp();

export const CreateUserInFirestore = userFunctions.CreateUserInFirestore;
