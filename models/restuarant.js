module.exports = (sequelize, DataTypes) => {
  // Creates a "Book" model that matches up with DB
  const Restuarant = sequelize.define("Restuarant", {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  });

  Restuarant.associate = models => {
    Restuarant.hasMany(models.Waiter, {
      onDelete: "cascade"
    });
  };
  return Restuarant;
};
