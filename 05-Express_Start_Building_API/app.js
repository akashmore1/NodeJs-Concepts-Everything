// For running this application 'npx nodemon [your-app.js]'

const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// =================================================== middlewares ================================================== //
app.use(morgan('dev'));
app.use(express.json());

// create our own middleware
// If we define our middleware after the route, it will not be executed
app.use((req, res, next) => {
  console.log('Hello from middleware');
  // We always need to call next() method while creating a middleware
  // Otherwise req-res cycle will be stuck
  // We would never be able to move on and will not be able to send client a response
  next();
  // console.log(req.body, res);
});

// Let's create a new middleware and actually manipulate request object
app.use((req, res, next) => {
  req.reqTime = new Date().toISOString();
  // We can send this reqtime in response.
  // It's really easy to work with req-res cycle because of middleware
  next();
});

// =================================================== needed variables ================================================== //
const port = 3000;

// Convert into javsscript object
const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

const users = JSON.parse(fs.readFileSync('./dev-data/data/users.json'));
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

// =================================================== routes ================================================== //
// 👇This is a good way but better way we can use routes
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createNewtour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 👇This ia also a way to define route but nedd to refact so commented
// app.route('/api/v1/tours').get(getAllTours).post(createNewtour);

// app
//   .route('/api/v1/tours/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

// app
//   .route('/api/v1/users')
//   .get(getAllUsers)
//   .post(createUser)
//   .patch(updateUser)
//   .delete(deleteUser);

// =================================================== start the server ================================================== //
// We don't need to specify content-type in experss it takes care of headers for us
app.listen(port, () => {
  console.log(`App started running at ${port}`);
});

// =================================== Not related to project👇 ======================================== //
// app.get('/', (req, res) => {
//   res.status(200).json({ msg: 'Hello from server!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.status(200).send('You can write to this request');
// });
