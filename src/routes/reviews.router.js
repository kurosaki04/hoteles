const { getAll, create, getOne, remove, update } = require('../controllers/reviews.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const reviewsRouter = express.Router();

reviewsRouter.route('/reviews')
    .get(verifyJWT, getAll)
    .post(verifyJWT, create);

reviewsRouter.route('/reviews/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = reviewsRouter;