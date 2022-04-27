const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    address: {
        building: String,
        coord: [ Number ],
        street: String,
        zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [ { 
        date: {
            $date: Number
        },
        grade: String,
        score: Number,
    }],
    name: {
        type: String,
        required: true,
    },
    restaurant_id: {
        type: String,
        required: true,
        unique:true,
    },
})

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = RestaurantModel;