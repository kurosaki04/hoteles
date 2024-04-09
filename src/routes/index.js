const express = require('express');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const hotelRouter = require('./hotel.router');
const imageRouter = require('./image.router');
const reviewsRouter = require('./reviews.router');
const bookingRouter = require('./booking.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter)
router.use(cityRouter)
router.use(hotelRouter)
router.use(imageRouter)
router.use(reviewsRouter)
router.use(bookingRouter)


module.exports = router;