import express from 'express';
import config from '../config.js';
import React from "react";

const router = express.Router();

router.get('/', function(req, res, next) {
  // GET/users/ route
  res.send(
      [
          {name: 'Jen', profilePic: '' , role:'user'},
          {name: 'Roy', profilePic:'', role:'admin' },
          {name: 'Moss', profilePic:'', role:'user'},
          {name: 'Denholm', profilePic:'', role:'guest'},
      ]
  );
});

export default router;
