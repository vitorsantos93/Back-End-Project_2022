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

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String, 
        required: true,
    },
    age: {
        type: String, 
        required: true,
    },
    district: {
        type: Object, 
        required: true,
    },
    county: {
        type: Object, 
        required: true,
    },
    parish: {
        type: Object, 
        required: true,
    }
});

const User = mongoose.model("users", userSchema);

module.exports = { User };

