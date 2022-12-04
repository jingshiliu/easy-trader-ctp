// user id

const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    class User extends Model{}

    User.init(
        {
            userId:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            userName:{
                type: DataTypes.STRING,
                // allowNull default is true
            },
            password:{
                type: DataTypes.STRING,
            }
        },{
            sequelize,
            modelName: 'User'
        }
    );

    User.associate = (models) =>{
        models.User.hasMany(models.UserStock)
    };

    return User;
}