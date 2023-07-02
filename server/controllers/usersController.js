const { User } = require("../models/usersModel.js");

exports.allUsers = async (req, res) => {
    const allUsers = await User.find();
    const countUsers = await User.find().count();
    if(countUsers === 0){
         res.status(404).json({"message": "No users in Database"})
    } else {
        res.status(200).json(allUsers);
    }
    console.log({
        "users_In_Database": countUsers,
        "users_Data": allUsers
    })
}

exports.getUser = async (req, res) => {
    const user = await User.find({_id:req.params.id});
    const userCount = await User.find({_id:req.params.id}).count();
    if(userCount === 0) {
        res.status(404).json({"message": "User not found"})
    } else {
        res.status(200).json(user);
    }
    console.log({
        "user_Data": user
    })
};

exports.createUser = async (req, res) => {
    console.log(req.body)
    try {
        const user = req.body
        const newUser = new User(user);
        const result = await newUser.save();
        res.status(201).send(result);
        console.log({
            "new_user": newUser,
            "message": res.status(201)
        })
    } catch (error) {
        res.status(409).json({"message": error.message})
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        );
        res.status(200).json(updateUser);
        console.log({
            "updated_data": updateUser,
            "message": res.status(200)
        })
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

exports.deleteUser = async (req, res) => {
    const user = await User.find({_id:req.params.id})
    const deleteUser = await User.deleteOne({_id:req.params.id}); 
    if(deleteUser.deletedCount === 0) {
        res.status(404).json({"message": "User not found."})
    } else {
        res.status(200).send(`The User ${user[0].firstName} ${user[0].lastName} with the id: ${req.params.id} has been removed from database.`)
    } 
    console.log({
        "deleted_user": user,
        "message": deleteUser
    })       
}



