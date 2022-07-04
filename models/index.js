const sequelize=require('../dbconfig/db.js')
const {Sequelize, DataTypes} = require('sequelize');
sequelize.authenticate()
.then(()=>{
    console.log('connected to database successfully');
})
.catch(err=>{
    console.log('error connecting to database'+err)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.restaurants=require('./restaurantModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


module.exports=db