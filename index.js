const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
//Database
const dbActions = require('./data/helpers/actionModel');
const dbProjects = require('./data/helpers/projectModel');
//PORT
const PORT = process.env.PORT || 5000;

server.use( express.json(),
            helmet(),
             logger('dev'));

server.get('/api/actions', (req,res) => {
      dbActions.get()
               .then(action => {
                   res.status(200).json(action);
               })
               .catch(err => {
                   res.json(500).json({errorMessage: "Unable to get actions this time"});
               })
});

server.get('/api/actions/:id', (req,res) => {
    const { id } = req.params;
    dbActions.get(id)
             .then(action => {
                action ? res.stats(200).json(action) : res.status(404).json({Message: "Required action with this ID not found"});
                console.log(action);
             })
             .catch(err => {
                 res.json(500).json({errorMessage: "Unable to get actions this time"});
             })
});

server.post('/api/actions', (req,res) => {
      const action = req.body;
      console.log('This is line 35:', action);
      if(action.notes && action.description && action.project_id) {
      dbActions.insert(action)
               .then(action => {
                //    console.log('line#: ', action)
                   res.status(201).json(action);
               })
               .catch(err => {
                   res.status(500).json({errorMessage: "Could not create this action for you now"});
               });
      } else {
          res.status(400).json({errorMessage: "Please enter notes and description details"});
      }        
});

server.listen(PORT, () => {
    console.log(`App is up and running at the PORT ${PORT}.`);
})
