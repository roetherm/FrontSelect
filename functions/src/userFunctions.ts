import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Create user entry in firestore database when user logs in first time
export const CreateUserInFirestore = functions.auth
      .user()
      .onCreate((user) => {
        const ref = admin.firestore().collection('users').doc();
        const key = ref.id;
        ref.set({
          key: key,
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
        })
        .then((snapshot: any) => {
          console.log(snapshot);
        })
        .catch((error: any) => {
          console.log(error);
        });
        return true;
      });
