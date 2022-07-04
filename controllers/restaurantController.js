const { sequelize } = require('../models')
const db=require('../models')


const Restaurant=db.restaurants
 const Sequelize=require('sequelize')

const addRestaurant = async(req, res) => {
  console.log("entered in adding restaurant")

  console.log("body is ",req.body)

    // let data = {
    //     restaurant_name: req.body.restaurant_name,
    //     address:req.body.address,
    //     veg_only: req.body.veg_only,
    //     cost: req.body.cost,
    //     cusine_types: req.body.cusine_types,
    //     is_open: req.body.is_open
    // }

    await Restaurant.create(req.body)
    .then((res1) => {
        console.log("data is ",res1.dataValues)
        res.status(200).send(res1.dataValues)
    })
    .catch((err) => {
        console.log("eroor message is ",err.message)
        res.status(401).send(err)
    })
    // res.status(200).send(restaurant)
}


// getting all restaurants 

const getAllRestaurants = async (req, res) => {
    let restaurants=await Restaurant.findAll({})
    
    console.log(restaurants[0]?.cost)
    console.log(restaurants[0]?.cusine_types)
    console.log(restaurants[0]?.test)
    console.log("data type is ",typeof(restaurants[0].cusine_types))

    res.status(200).send(restaurants)
   
}


//updating restaurant data

const updateRestaurant = async (req, res) => {
    let id=req.params.id
    const restaurant=await Restaurant.update(req.body,{where: {restaurant_id:id}})

    res.status(200).send(restaurant)
}


// deleting restaurant data 
const deleteRestaurant= async(req,res)=>{
    let id=req.params.id
    const restaurant=await Restaurant.destroy({where: {restaurant_id:id}})

    res.status(200).send('Restaurant is deleted successfully')

}

// get all veg restaurants 

const onlyvegRestaurants = async(req,res)=>{
     const vegRestaurants=await Restaurant.findAll({where: {veg_only:true}})
    
    res.status(200).send({vegRestaurants})
 }



 // get all veg restaurants  which have low cost

const onlyvegRestaurantsWithLowCost = async(req,res)=>{
    const vegRestaurants=await Restaurant.findAll({where: {veg_only:true,cost:"LOW"}})
   
   res.status(200).send({vegRestaurants})
}


// Get all veg restaurant that have low cost and have cuisines “french”

const restaurantCusineFrench= async(req, res) => {
    db.sequelize.query("SELECT  * FROM restaurants where FIND_IN_SET('French',cusine_types)>0;", { type: Sequelize.QueryTypes.SELECT})
    .then(value => {
        // console.log(value[0].restaurant_name + ' has an idx of ',value.length);
    res.status(200).send(value)

    }).catch((err)=>{
        res.status(500).send(err)
    })
}

// #Get all restaurant that have (high or low) cost and have cuisines “french” and “italian”


const restaurantCusineFrenchOrItalianCostLowOrHigh= async(req, res) => {
    db.sequelize.query("SELECT  * FROM restaurants where (FIND_IN_SET('French',cusine_types)>0 and FIND_IN_SET('italian',cusine_types) >0) AND (cost='HIGH' or cost='LOW');", { type: Sequelize.QueryTypes.SELECT})
    .then(value => {
    res.status(200).send(value)

    }).catch((err)=>{
        res.status(500).send(err)
    })
}

//  Get all restaurant that have (high or low) cost and have cuisines “french” or “italian”


const restaurantCusineFrenchAndItalianCostLowOrHigh= async(req, res) => {
    db.sequelize.query("SELECT  * FROM restaurants where (FIND_IN_SET('Italian',cusine_types)>0 or FIND_IN_SET('French',cusine_types)>0) AND (cost='High' or cost='LOW');", { type: Sequelize.QueryTypes.SELECT})
    .then(value => {
    res.status(200).send(value)

    }).catch((err)=>{
        res.status(500).send(err)
    })
}




module.exports={
    addRestaurant,
    getAllRestaurants,
    updateRestaurant,
    deleteRestaurant,
    onlyvegRestaurants,
    onlyvegRestaurantsWithLowCost,
    restaurantCusineFrench,
    restaurantCusineFrenchOrItalianCostLowOrHigh,
    restaurantCusineFrenchAndItalianCostLowOrHigh
}