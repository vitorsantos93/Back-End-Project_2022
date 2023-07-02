const { Parish } = require("../models/parishModel.js");

const { County } = require("../models/countyModel.js");

exports.allParishes = async (req, res) => {
        const allParishes = await Parish.find( );
        const countParishes = await Parish.find().count();
        if(countParishes === 0){
            res.status(404).json({"message": "Parishes not found."})
        } else  {
            res.status(200).json(allParishes);
        } 
        console.log({
            "Parishes_Data": allParishes,
            "parishesInDb": countParishes
        }) 
} 

exports.allParishesByCounty = async (req, res) => {
    const county = await County.find({_id: req.params.countyId})
    const countCounty = await County.find({_id: req.params.countyId}).count()
    if(countCounty === 0) {
        res.status(404).json({"message": "County not Found"})
    } else {
        const countyId = county[0]._id
        console.log(countyId)
        const parishes = await Parish.find({
            "county.id" : [countyId]
        })
        const countParishes = await Parish.find({
            "county.id" : [countyId]
        }).count();
        if(countParishes === 0) {
            
            res.status(404).json({"message": "No Parishes in this County"})
        } else {
            res.status(200).json(parishes)
        }
        console.log({
            "county": county,
            "parishes": parishes,
            "numberOfparishes": countParishes
        })
    }
}

exports.getParish = async (req, res) => {
    const county = await County.find({_id: req.params.countyId});
    const countCounty = await County.find({_id: req.params.countyId}).count();
    if(countCounty === 0) {
        res.status(404).json({"message": "County not found"});
    } else {
        const parish = await Parish.find({_id: req.params.parishId});
        const countParish = await Parish.find({_id: req.params.parishId}).count();
        if(countParish === 0){
            res.status(404).json({"message": "Parish not found"})  
        } else {
            res.status(200).json(parish)
        }
        console.log({
            "parish_Data": parish,
            "county": county
        })
    }
} 

exports.createParish = async (req, res) => {
     try {
        const county = await County.find({_id: req.params.countyId})
        console.log("County ID: " + county[0].id)
        const newParish = new Parish({
            parishName: req.body.parishName,
            county: 
                {
                    id: county[0]._id,
                    countyName: county[0].countyName,
                    district: {
                        id: county[0].district.id,
                        districtName: county[0].district.districtName
                    }
                }
        });
        const result = await newParish.save();
        res.status(201).json(result);
        console.log({
            "new_parish": result,
        })
    } catch (error) {
        res.status(409).json({"message": error.message})
    }
}

exports.updateParish = async (req, res) => {
    try {
        const updateParish = await Parish.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        );
        res.status(200).json(updateParish);
        console.log({
            "message": "Success",
            "updated_data": updateParish
        })
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

exports.deleteParish = async (req, res) => {
        const parish = await Parish.find({_id:req.params.id})
        const deleteParish = await Parish.deleteOne({_id:req.params.id}); 
        if(deleteParish.deletedCount === 0) {
            res.status(404).json({"message": "Parish not found."})
        } else {
            res.status(200).send(`The Parish ${parish[0].parishName}, from County ${parish[0].county.countyName}, from District ${parish[0].county.district.districtName}  with the id: ${req.params.id} has been removed from database.`)
        } 
        console.log({
            "deleted_county": parish,
            "message": deleteParish
        })       
}