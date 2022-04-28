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
    const { borough } = req.params;
    const restaurants = await RestaurantModel.find({borough});

    res.status(200).json({
        success: true,
        [`${borough} Restaurants`]: restaurants
    });
});

router.get("/cuisine/:cuisine", async (req, res, next) => {
    const { cuisine } = req.params;
    const borough = req.query.borough;
    let restaurants = await RestaurantModel.find({cuisine});

    if (borough) {
        restaurants = restaurants.filter(restaurant => restaurant.borough === borough);
    };

    res.status(200).json({
        success: true,
        [`${cuisine} cuisine restaurants:`]: restaurants
    });
});

router.get("/first/:number", async (req, res, next) => {
    const { number } = req.params;
    let restaurants = await RestaurantModel.find().limit(number)

    res.status(200).json({
        success: true,
        [`First ${number} restaurants:`]: restaurants
    });
});

router.get("/zipcode", async (req, res, next) => {
    let restaurants = await RestaurantModel.find({ "address.zipcode": 11374 })

    res.status(200).json({
        success: true,
        Restaurants_with_11374_zipcode: restaurants
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