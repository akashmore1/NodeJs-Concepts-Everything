// For running this application 'npx nodemon [your-app.js]'

const fs = require('fs');
const express = require('express');

const app = express();

// middleware
app.use(express.json());

const port = 3000;

// Convert into javsscript object
const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

// Build natours get api
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    ok: true,
    result: tours.length,
    data: { tours },
  });
};

// If we only want a particular tour, client will send id for which it require particular tour
const getTour = (req, res) => {
  // console.log(req.params);
  const id = Number(req.params.id);
  const requiredTour = tours.filter((tour) => {
    return tour.id === id;
  });
  res.status(200).json({
    status: 'success',
    ok: true,
    tour: requiredTour,
  });
};

// Build natours post api
// In post request, we ca send data from client to server
// 'req' parameter in callback of post request will have that client/user's data.
// But express doen not make this data directly available in req
// In order to make that data available, we use middleware.
// app.use(express.json()); is used to make middleware available
const createNewtour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(tours),
    (err) => {
      if (err) res.send(err);
      res.status(201).json({
        status: 'success',
        ok: true,
        result: tours.length,
        data: newTour,
      });
    }
  );
};

// For updating we use either put or patch api.
// If we want whole record(object) to be updated, we use put.
// If we want only some parameters in record(object) to be updated, we use patch.
const updateTour = (req, res) => {
  tours.forEach((tour) => {
    if (tour.id === Number(req.params.id)) {
      tour.name = req.body.name;
    }
  });

  const updatedTour = tours.filter((tour) => {
    return tour.id === Number(req.params.id);
  });

  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(tours),
    () => {
      res.status(200).json({
        status: 'success',
        data: {
          tours: updatedTour,
        },
      });
    }
  );
};

// Build delete api for Natours
const deleteTour = (req, res) => {
  let id = Number(req.params.id);

  const updatedTours = tours.filter((tour) => {
    return tour.id !== id;
  });

  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(updatedTours),
    () => {
      res.status(204).json({
        status: 'success',
        data: null,
      });
    }
  );
};

// 👇This is a good way but better way we can use routes
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createNewtour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(createNewtour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

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
