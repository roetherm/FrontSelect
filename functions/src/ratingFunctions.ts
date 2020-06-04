import * as functions from 'firebase-functions';

export const RateData = functions.https.onRequest(async (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', '*');

  const zahl = req.body.data;
  const neueZahl = zahl + 4;
  console.log(zahl, neueZahl);

  res.json({
    angular: '2.7',
    vue: '1.3',
    react: '3.2',
    preact: '4.1',
    svelte: '3.0',
    ember: '4.4'
  });

});
