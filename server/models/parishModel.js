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

const parishSchema = Schema({
    parishName: {
        type: String,
        required: true
    },
    county: {
        type: Object,
        required: true
    }
});

const Parish = mongoose.model("parishes", parishSchema);

module.exports = { Parish };

