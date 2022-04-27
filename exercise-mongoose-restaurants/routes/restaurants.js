const router = require("express").Router();
const RestaurantModel = require("../models/Restaurant");

router.get("all", async (req, res, next) => {
    const restaurants = await RestaurantModel.find({});
    
    res.status(200).json(restaurants)
})
