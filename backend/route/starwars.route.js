const express = require('express');

const starwarsRouter = express.Router();
const starwarsController = require('../controller/starwars.controller');

starwarsRouter.route('/')
  .get(starwarsController.list)
  .post(starwarsController.create);

starwarsRouter.route('/:id')
  .get(starwarsController.find)
  .put(starwarsController.update)
  .delete(starwarsController.remove);

module.exports = starwarsRouter;
