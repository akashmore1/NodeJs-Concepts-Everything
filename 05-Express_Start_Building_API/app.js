// For running this application 'npx nodemon [your-app.js]'

const fs = require('fs');
const express = require('express');

const app = express();

const port = 3000;

// Convert into javsscript object
const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

// Build natours api
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    ok: true,
    result: tours.length,
    data: { tours },
  });
});

// We don't need to specify content-type in experss it takes care of headers for us
app.listen(port, () => {
  console.log(`App started running at ${port}`);
});

// app.get('/', (req, res) => {
//   res.status(200).json({ msg: 'Hello from server!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.status(200).send('You can write to this request');
// });
