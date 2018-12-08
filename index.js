const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();

//PORT
const PORT = process.env.PORT || 5000;
//Routers
 const actionRouter = require('./data/routes/action_router');
const projectRouter = require('./data/routes/project_router');

server.use( express.json(), helmet(), logger('dev'));
 server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);


server.listen(PORT, () => {
    console.log(`App is up and running at the PORT ${PORT}.`);
})
