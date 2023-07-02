 const mongoose = require("mongoose");
 const { Schema } = require("mongoose");

//Ligação à BD
mongoose.connect("mongodb://localhost:27017/user_formData")
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting database: ", err.message)
    });

const districtSchema = new Schema({
    districtName: {
        type: String,
    }
});

const District = mongoose.model("districts", districtSchema);

module.exports = { District };

