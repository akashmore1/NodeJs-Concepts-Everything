const express = require('express');

const userRouter = express.Router();
app.use('/api/v1/users', userRouter);
userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUser)
  .patch(updateUser)
  .delete(deleteUser);
