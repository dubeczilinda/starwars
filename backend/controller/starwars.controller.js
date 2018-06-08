const Starwars = require('../models/starwars');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = {
  list: (req, res) => {
    // TODO: list spacehips
    Starwars.find({})
      .then(spaceship => res.json(spaceship))
      .catch(err => res.send(err));
  },

  find: (req, res) => {
    // TODO: find a spacehip
    Starwars.findById(req.params.id)
      .then((spaceship) => {
        if (spaceship) {
          res.status(200).json(spaceship);
        } else {
          res.status(404).json({
            message: 'Nem létező Id!',
          });
        }
      })
      .catch(err => res.send(err));
  },

  create: (req, res) => {
    // TODO: create spacehip
    let body = JSON.stringify(req.body);
    body = JSON.parse(body);

    Starwars.create(body)
      .then(spaceship => res.send(spaceship))
      .catch(err => res.send(err));
  },

  update: (req, res) => {
    // TODO: update a spacehip
    req.body.updateAt = new Date().toLocaleString();
    Starwars.findByIdAndUpdate(req.params.id, req.body)
      .then((spaceship) => {
        if (spaceship) {
          res.status(200).json(spaceship);
        } else {
          res.status(404).json({
            message: 'Nem létező Id!',
          });
        }
      })
      .catch(err => res.send(err));
  },

  remove: (req, res) => {
    // TODO: delete spacehip
    Starwars.findByIdAndRemove(req.params.id)
      .then((spaceship) => {
        if (spaceship) {
          res.status(200).json(spaceship);
        } else {
          res.status(404).json({
            message: 'Nem létező Id!',
          });
        }
      })
      .catch(err => res.send(err));
  },
};
