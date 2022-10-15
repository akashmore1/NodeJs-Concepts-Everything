const express = require('express');

const router = express.Router();
app.use('/api/v1/users', router);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
);
// =================================================== route handlers ================================================== //

// Get users

const getAllUsers = (req, res) => {
  res.status(200).json({ users: users });
};

const createUser = (req, res) => {
  res.status(504).send('Internal server error');
};

const updateUser = (req, res) => {
  res.status(504).send('Internal server error');
};

const deleteUser = (req, res) => {
  res.status(504).send('Internal server error');
};

router
  .route('/')
  .get(getAllUsers)
  .post(createUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = routers;
