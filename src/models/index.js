const Booking = require("./Booking");
const Hotel = require("./Hotel");
const Image = require("./Image");
const Reviews = require("./Reviews");
const User = require("./User");
const City = require("./City");

Hotel.belongsTo(City)
City.hasMany(Hotel)

Image.belongsTo(Hotel)
Hotel.hasMany(Image)

Reviews.belongsTo(Hotel)
Hotel.hasMany(Reviews)

Reviews.belongsTo(User)
User.hasMany(Reviews)

Booking.belongsTo(User)
User.hasMany(Booking)

Booking.belongsTo(Hotel)
Hotel.hasMany(Booking)