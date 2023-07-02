const express = require("express");
const router = express.Router();

const { 
    allUsers, 
    getUser, 
    createUser, 
    updateUser, 
    deleteUser 
} = require("../controllers/usersController.js");

router
    .route("/")
    .get(allUsers) 
    .post(createUser)

router  
    .route("/:id")
    .get(getUser) 
    .patch(updateUser) 
    .delete(deleteUser)

module.exports = router;