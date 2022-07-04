const restaurantController = require('../controllers/restaurantController.js')

const router=require('express').Router();

router.post('/add',restaurantController.addRestaurant);

router.get('/',restaurantController.getAllRestaurants)

router.put('/update/:id',restaurantController.updateRestaurant)

router.delete('/delete/:id',restaurantController.deleteRestaurant)
router.get('far',restaurantController.getAllRestaurants)

// only veg restaurants

router.get('/vegrestaurants',restaurantController.onlyvegRestaurants)

// only veg restaurants wth lowcost

router.get('/vegrestaurantslowcost',restaurantController.onlyvegRestaurantsWithLowCost)

// get restaurant which have dish cusine 

router.get('/getfrenchcusinerestaurant',restaurantController.restaurantCusineFrench);

// get all restaurant which have cusine italian or french with price high or low

router.get('/getfrenchoritalian',restaurantController.restaurantCusineFrenchOrItalianCostLowOrHigh)

// get all restaurant which have cusine italian and french with price high or low

router.get('/getfrenchanditalian',restaurantController.restaurantCusineFrenchOrItalianCostLowOrHigh)

module.exports = router;