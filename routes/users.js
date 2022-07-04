import express from 'express';
import config from '../config.js';

const router = express.Router();

router.get('/', function(req, res, next) {
  // GET/users/ route
  res.send(
      [
          {name: 'Jen', profilePic: ''},
          {name: 'Roy', profilePic:'' },
          {name: 'Moss', profilePic: ''},
          {name: 'Denholm', profilePic:''},
      ]
  );
});

export default router;
