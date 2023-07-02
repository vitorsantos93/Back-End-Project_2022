const { County } = require("../models/countyModel.js");

const { District } = require("../models/districtModel.js")

exports.allCounties = async (req, res) => {
    const allCounties = await County.find();
    const countCounties = await County.find().count();
    if(countCounties === 0){
        res.status(404).json({"message": "No Counties in this District"})
    } else  {
        res.status(200).json(allCounties);
    } 
    console.log({
        "Counties_Data": allCounties,
        "countiesInDb": countCounties
    })  
}

exports.allCountiesByDistrict = async (req, res) => {
    const district = await District.find({_id: req.params.districtId})
    const countDistrict = await District.find({_id: req.params.districtId}).count()
    if(countDistrict === 0) {
        res.status(404).json({"message": "District not Found"})
    } else {
        const districtId = district[0]._id
        const counties = await County.find({
            "district.id" : [districtId]
        })
        const countCounties = await County.find({
            "district.id" : [districtId]
        }).count();
        if(countCounties === 0) {
            res.status(404).json({"message": "No Parishes in this District"})
        } else {
            res.status(200).json(counties)
        }
        console.log({
            "district": district,
            "counties": counties,
            "CountiesInDistrict": countCounties
        })
    }
}

exports.getCounty = async (req, res) => {
    const district = await District.find({_id: req.params.districtId});
    const countDistrict = await District.find({_id: req.params.districtId}).count();
    if(countDistrict === 0) {
        res.status(404).json({"message": "District not found"});
    } else {
        const county = await County.find({_id: req.params.countyId});
        const countCounty = await County.find({_id: req.params.countyId}).count();
        if(countCounty === 0){
            res.status(404).json({"message": "County not found"})  
        } else {
            res.status(200).json(county)
        }
        console.log({
            "county_Data": county,
            "District": district
        })
    }
} 


 
exports.createCounty = async (req, res) => {
    try {
        const district = await District.find({_id: req.params.districtId})
        console.log(district[0].id)
        const newCounty = new County({
            countyName: req.body.countyName,
            district: 
                {
                    id: district[0]._id,
                    districtName: district[0].districtName
                }
        });
        const result = await newCounty.save();
        res.status(201).json(result);
        console.log({
            "new_county": result,
        })
    } catch (error) {
        res.status(409).json({"message": error.message})
    }
}

exports.updateCounty = async (req, res) => {
     try {
        const updateCounty = await County.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        );
        res.status(200).json(updateCounty);
        console.log({
            "message": "Success",
            "updated_data": updateCounty
        })
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

exports.deleteCounty = async (req, res) => {
    const county = await County.find({_id:req.params.id})
    const deleteCounty = await County.deleteOne({_id:req.params.id}); 
    if(deleteCounty.deletedCount === 0) {
        res.status(404).json({"message": "County not found."})
    } else {
        res.status(200).send(`The County ${county[0].countyName}, from District ${county[0].district.districtName}, with the id: ${req.params.id} has been removed from database.`)
    } 
    console.log({
        "deleted_county": county,
        "message": deleteCounty
    })       
}
