const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    class UserStock extends Model{}

    UserStock.init(
        {
            userId:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            stockSymbol: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 0,
                    max: 1_000_000_000_000
                }
            }
        },{
            sequelize,
            modelName: 'UserStock',
            paranoid: true
        })

    return UserStock;
}