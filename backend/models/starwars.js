const mongoose = require('mongoose');

const StarwarsSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  consumables: {
    type: String,
  },
  denomination: {
    type: String,
    required: true,
    unique: true,
  },
  cargo_capacity: {
    type: Number,
  },
  passengers: {
    type: Number,
  },
  max_atmosphering_speed: {
    type: Number,
  },
  crew: {
    type: Number,
  },
  lengthiness: {
    type: Number,
  },
  model: {
    type: String,
    required: true,
    unique: true,
  },
  cost_in_credits: {
    type: Number,
  },
  manufacturer: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Starwars', StarwarsSchema);