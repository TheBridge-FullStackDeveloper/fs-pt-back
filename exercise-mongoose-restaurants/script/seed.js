const RestaurantModel = require("../models/Restaurant");
const restaurants = require("../collections/restaurants.json");
const mongoose = require("mongoose");

const mongooseConfigs = { useNewUrlParser: true, useUnifiedTopology: true };

const create = async () => {
    try {
        await RestaurantModel.insertMany(restaurants);
        console.info("Restaurants added to Mongo 🛎")
    } catch (err) {
        console.error(`😥 Error trying to add DB to Mongo: ${error.message}`)
    }
};

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/restaurant", mongooseConfigs);
    await create();
    process.exit(0);
}

main();