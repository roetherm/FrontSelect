import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Create user entry in firestore database when user logs in first time
export const MakeUserAdmin = functions.https.onCall(async (data) => {

  console.log(data);

  try {

    const user = await getUser(data);
    const newAdmin = await makeUserAdmin(user);

    return newAdmin;

  }

  catch(err) {
    console.log(err);
    return false;
  }

});


const getUser = (data: any) => {

  const promise = new Promise ((resolve, reject) => {

    admin.auth().getUserByEmail(data.email)
    .then((user: any) => {
      resolve(user);
    })
    .catch((err: any) => {
      console.log(err);
      reject(err);
    });

  })

  return promise;
}



const makeUserAdmin = (user: any) => {

  const promise = new Promise ((resolve, reject) => {

    admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    })
    .then(() => {
      resolve(`Success! ${user.email} ist jetzt ein Admin!`);
    })
    .catch((err: any) => {
      reject(err);
    });

  })

  return promise;

}
