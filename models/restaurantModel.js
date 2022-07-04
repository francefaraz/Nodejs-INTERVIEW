const Sequelize=require('sequelize')
module.exports=(sequelize,DataTypes) =>{
    const Restaurant= sequelize.define("restaurant",{

        restaurant_id: {
            type: DataTypes.UUID,
            defaultValue:Sequelize.UUIDV4,
            primaryKey: true
        },
        restaurant_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        veg_only: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        cost: {
            type: DataTypes.STRING,
            defaultValue:"HIGH"
        },
        cusine_types:{
            type:DataTypes.STRING,
            allowNull:false

        },
        is_open: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
    //   test:  {
    //        type: DataTypes.JSON,
    //        get: function () {
    //         return JSON.parse(this.getDataValue('test'));
    //     },
    //     set: function (test) {
    //         this.setDataValue('test', JSON.stringify(test));
    //     },

    //     },
    
    })
    return Restaurant
}


/*

vegOnly: boolean
● Cost : string
○ Low
○ Medium
○ high
● cusineTypes: array of strings
○ example:
○ cusineTypes: [ “south indian”, ”italian”, “french”, “north indian”, ….. etc ]
● createdAt: string (timestamp)
● updatedAt: string (timestamp)
● isOpen: boolean
*/