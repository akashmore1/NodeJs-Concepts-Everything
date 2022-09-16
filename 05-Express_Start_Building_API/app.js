const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello from server!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You can write to this request');
});

// We don't need to specify content-type in experss it takes care of headers for us

app.listen(port, () => {
  console.log(`App started running at ${port}`);
});
