import * as functions from 'firebase-functions';

export const RateData = functions.https.onRequest(async (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', '*');

  const zahl = req.body.data;
  const neueZahl = zahl + 4;
  console.log(zahl, neueZahl);

  res.send([
    {
      name: 'angular',
      grade: '2.7',
      text: 'Angular zeichnet sich durch eine wunderbare Oberfläche aus'
    },
    {
      name: 'vue',
      grade: '1.7',
      text: 'Vue hat eine gute Note, weil Vue tatsächlich oft viel besser ist'
    },
    {
      name: 'react',
      grade: '5.4',
      text: 'React ist richtiger murks'
    },
    {
      name: 'preact',
      grade: '5.4',
      text: 'React ist richtiger murks'
    },
    {
      name: 'svelte',
      grade: '1.1',
      text: 'React ist richtiger murks'
    },
    {
      name: 'ember',
      grade: '5.4',
      text: 'React ist richtiger murks'
    }
    ]);

});
