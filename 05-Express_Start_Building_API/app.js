const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello from server!', app: 'Natours' });
});

app.listen(port, () => {
  console.log(`App started running at ${port}`);
});
