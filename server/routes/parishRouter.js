const express = require("express");

const { 
    allParishes,
    allParishesByCounty,
    getParish,
    createParish,
    updateParish,
    deleteParish
} = require("../controllers/ParishController.js");

const router = express.Router();

router
    .route("/")
    .get(allParishes)

router
    .route("/:countyId")
    .get(allParishesByCounty)
    .post(createParish)

router
    .route("/:countyId/:parishId")
    .get(getParish)

router
    .route("/:id")
    .patch(updateParish)
    .delete(deleteParish)


module.exports = router; 