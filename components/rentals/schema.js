const mongoose = require("mongoose");
const {Schema} = mongoose;

const RentalsSchema = new Schema(
    {
        idBook: {
            type: String,
            required: true,
        },
        idUser: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("rentals", RentalsSchema);
