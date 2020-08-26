module.exports = function (sequelize, DataTypes) {
  // Creates a "Waiter" model that matches up with DB
  let Waiter = sequelize.define("Waiter", {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });

  Waiter.associate = function (models) {
    Waiter.belongsTo(models.Restuarant, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Waiter;
};