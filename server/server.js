
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const stationRouter = require('./routes/station.router');
const menuRouter = require('./routes/menu.router');
const ingredientRouter = require('./routes/ingredient.router');
const orderRouter = require('./routes/order.router');
const preplistRouter = require ('./routes/preplist.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/station', stationRouter);
app.use('/api/menu', menuRouter);
app.use('/api/ingredient', ingredientRouter);
app.use('/api/order', orderRouter);
app.use('/api/preplist', preplistRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
