const express = require("express");

const { 
    allDistricts, 
    getDistrict,
    createDistrict,
    updateDistrict,
    deleteDistrict
} = require("../controllers/districtController.js");

const router = express.Router();

router 
    .route("/")
    .get(allDistricts)
    .post(createDistrict)

router
    .route("/:id")
    .post(createDistrict)
    .get(getDistrict)
    .patch(updateDistrict)
    .delete(deleteDistrict)

module.exports = router;
