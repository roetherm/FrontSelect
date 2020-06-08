import * as functions from 'firebase-functions';
import admin = require('firebase-admin');

let sumAllRatings = 0;

export const RateData = functions.https.onCall(async (data) => {

  console.log(data);

  try {

    const allFrameworks = await fetchAllFrameworks();
    const allParameters = await getParameters(allFrameworks);
    const allRatings = await rateFramework(allParameters, data);
    const allGrades = await generateGrade(allRatings);
    const allTexts = await generateTexts(allGrades);
    const finalResult = await modifyResults(allTexts);

    sumAllRatings = 0;

    return finalResult;

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

      // Zähle die Summen zusammen
      sumAllRatings = sumAllRatings + element.rating;

      // Für jedes framework suche die passende id
      allParameters.forEach((framework: any) => {
        const param = framework.parameters.find((parameter: { id: number; }) => parameter.id === i);

        const paramValue = element.rating * param.grade;

        Object.assign(param, {
          value: paramValue,
          rating: element.rating
        });

      });

      // Wenn erfolgreich durchlaufen, dann Promise auflösen
      if (i === data.data.length) {
        resolve(allParameters);
      } else if (i > data.data.length) {
        reject();
      }

    });

  });

  return promise;

}


const generateGrade = (allRatings: any) => {

  const promise = new Promise((resolve, reject) => {

    let i = 0;

    allRatings.forEach((framework: any) => {
      i++;

      let frameworkValues = 0;

      // Rechne für jeden Parameter die Values zusammen
      framework.parameters.forEach((param: any) => {
        frameworkValues = frameworkValues + param.value;
      })

      Object.assign(framework, {
        summe: frameworkValues,
        grade: frameworkValues / sumAllRatings
      });

      // Wenn erfolgreich durchlaufen, dann Promise auflösen
      if (i === allRatings.length) {
        resolve(allRatings);
      } else if (i > allRatings.length) {
        reject();
      }

    })

  })

  return promise;

}


const generateTexts = (allGrades: any) => {

  const promise = new Promise((resolve, reject) => {

    const text: any = [];

    // Sortieren nach bester Note
    allGrades.sort((a: any, b: any) => {
      return a.grade - b.grade;
    });

    // Sortieren nach höchsten Rating
    allGrades[0].parameters.sort((a: any, b: any) => {
      return a.rating - b.rating;
    })

    // Für die besten 3 Ratings pushe den Text in das Text-Array
    for (let x = 0; x <= 2; x++) {

     text.push(
       allGrades[0].parameters[x].text
     );

     if(x > 2) {
       reject();
     }

    };

    // Füge das Text-Array dem Object hinzu
    Object.assign(allGrades[0], {
      text
    });

    resolve(allGrades);

  })

  return promise;

}


const modifyResults = (allTexts: any) => {

  const promise = new Promise ((resolve, reject) => {

    let i = 0;

    allTexts.forEach((framework: any) => {
      i++;

      delete framework.parameters;
      delete framework.summe;

      if (i === allTexts.length) {
        resolve(allTexts);
      }

      if (i > allTexts.length) {
        reject();
      }

    })
  })

  return promise;

}
