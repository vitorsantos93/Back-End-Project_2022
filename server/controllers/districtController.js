const { District } = require("../models/districtModel.js");


exports.allDistricts = async (req, res) => {
   const allDistricts = await District.find();
    const countDistricts = await District.find().count();
    if(countDistricts === 0){
         res.status(404).json({"message": "No Districts in Database"})
    } else {
        res.status(200).json(allDistricts);
    }
    console.log({
        "Districts_Data": allDistricts,
        "Districts_In_Database": countDistricts
    })
}


exports.getDistrict = async (req, res) => {
    const district = await District.find({_id:req.params.id});
    const districtCount = await District.find({_id:req.params.id}).count();
    if(districtCount === 0) {
        res.status(404).json({"message": "District not found"})
    } else {
        res.status(200).json(district);
    }
    console.log({
        "district_Data": district
    })
}

exports.createDistrict = async (req, res) => {
  try {
        const district = req.body;
        const newdistrict = new District(district);
        const result = await newdistrict.save();
        res.status(201).json(result);
        console.log({
            "new_district": newdistrict,
        })
    } catch (error) {
        res.status(409).json({"message": error.message})
    }
}

exports.updateDistrict = async (req, res) => {
    try {
        const updateDistrict = await District.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        );
        res.status(200).json(updateDistrict);
        console.log({
            "message": "Success",
            "updated_data": updateDistrict
        })
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

exports.deleteDistrict = async (req, res) => {
    const district = await District.find({_id:req.params.id})
    const deleteDistrict = await District.deleteOne({_id:req.params.id}); 
    if(deleteDistrict.deletedCount === 0) {
        res.status(404).json({"message": "District not found."})
    } else {
        res.status(200).send(`The district ${district[0].districtName} with the id: ${req.params.id} has been removed from database.`)
    } 
    console.log({
        "deleted_district": district,
        "message": deleteDistrict
    })       
}

