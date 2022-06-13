const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');
const {createRoles} = require('./libs/initialSetup');

// Initializations
const app = express();
createRoles;

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/gastos', require('./routes/gastos.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});