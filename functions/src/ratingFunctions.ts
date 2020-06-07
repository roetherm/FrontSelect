import * as functions from 'firebase-functions';
import admin = require('firebase-admin');

let sumAllRatings = 0;

export const RateData = functions.https.onCall(async (data) => {

  console.log(data);

  try {

    const allFrameworks = await fetchAllFrameworks();
    const allParameters = await getParameters(allFrameworks);
    const allRatings = await rateFramework(allParameters, data);

    return allRatings;

  }

  catch (err) {

    console.error(err);
    return false;

  }

});

const fetchAllFrameworks = () => {

  const promise = new Promise((resolve, reject) => {
    admin.firestore()
    .collection('frameworks').get()
    .then(snap => {
      const allFrameworks: any = [];
      snap.forEach(doc => {
        allFrameworks.push({
          id: doc.id,
          name: doc.data().name
        })
      })
      resolve(allFrameworks);
    })
    .catch(err => {
      console.log(err);
      reject(err);
    });
  })
  return promise;
}

const getParameters = (frameworks: any) => {

  const allParameters: any = [];

  const promise = new Promise((resolve, reject) => {

    let i = 0;

    // Get parameters from each framework
    frameworks.forEach((el: any) => {

      const frameworkName = el.name;

      admin.firestore()
      .collection('frameworks')
      .doc(el.id)
      .collection('parameter').get()

      .then(snap => {
        snap.forEach(doc => {

          if (allParameters.map((e: { name: string; }) => e.name).indexOf(frameworkName) !== -1) {
            const index = allParameters.map((e: { name: string; }) => e.name).indexOf(frameworkName);
            allParameters[index].parameters.push(doc.data());
          } else {
            // Push for each entry in parameters
            allParameters.push({
              name: frameworkName,
              parameters: [doc.data()]
            })
          }

        });


        i++;

        if (i === frameworks.length) {

          resolve(allParameters);
        }

      })

      .catch(err => {
        console.log(err);
        reject(err);
      })

    });


  });

  return promise;
}

const rateFramework = (allParameters: any, data: any) => {

  const promise = new Promise((resolve, reject) => {

    let i = 0;

    // Für jedes Rating in data
    data.data.forEach((element: any) => {
      i++;


      // const frameworkAmount = allParameters.lengt;

      // Für jedes framework suche die passende id
      allParameters.forEach((framework: any) => {
        const param = framework.parameters.find((parameter: { id: number; }) => parameter.id === i);

        const paramValue = element.rating * param.grade;

        sumAllRatings = sumAllRatings + element.rating;

        Object.assign(param, { value: paramValue});

      });



      if (i === data.data.length) {
        resolve(allParameters);
      } else if (i > data.data.length) {
        reject();
      }

    });

  });

  return promise;

}
