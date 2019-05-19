module.exports = (sequelize, DataTypes) => {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    },
        { timestamps: false });
    return Burger;
}
