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

const countySchema = new Schema({
    countyName: {
            type: String,
            required: true
        },
         district: {
             type: Object,
             required: true
         } 
});

const County = mongoose.model("counties", countySchema);

module.exports = { County };

