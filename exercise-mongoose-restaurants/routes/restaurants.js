const router = require("express").Router();
const RestaurantModel = require("../models/Restaurant");


router.get("/all", async (req, res, next) => {
    const restaurants = await RestaurantModel.find();

    res.status(200).json({
        success: true,
        restaurants: restaurants
    });
});

router.get("/borough/:borough", async (req, res, next) => {
    const restaurants = await RestaurantModel.find();
    const { borough } = req.params;

    const localRestaurants = restaurants.filter(restaurant => restaurant.borough === borough)

    res.status(200).json({
        success: true,
        [`${borough}_Restaurants`]: localRestaurants
    });
});

router.post("/create", async (req, res, next) => {
    const newRestaurant = req.body;
    const update = await RestaurantModel.create(newRestaurant);

    res.status(200).json({
        success: true,
        restaurants: update
    });
});

router.put("/update/:mongoId", async (req, res, next) => {
    const { mongoId } = req.params;
    
    console.info('entra en update')
    const properties = req.body;
    const updatedDoc = await RestaurantModel.findByIdAndUpdate(mongoId, properties, {
        new: true
    });

    res.status(200).json({
        success: true,
        update: updatedDoc
    });
});

router.delete("/delete/:mongoId", async (req, res, next) => {
    const { mongoId } = req.params;
    const deletedDoc = await RestaurantModel.findByIdAndDelete(mongoId);

    res.status(200).json({
        success: true,
        deleted: deletedDoc
    });
})

module.exports = router;