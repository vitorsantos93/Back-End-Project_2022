const express = require("express");

const { 
    allCounties,
    allCountiesByDistrict,
    getCounty,
    createCounty,
    updateCounty,
    deleteCounty
} = require("../controllers/countyController.js");


const router = express.Router();

router
    .route("/")
    .get(allCounties)

router
    .route("/:districtId")
    .get(allCountiesByDistrict)
    .post(createCounty)

router
    .route("/:districtId/:countyId")
    .get(getCounty)

router
    .route("/:id")
    .patch(updateCounty)
    .delete(deleteCounty)

module.exports = router;