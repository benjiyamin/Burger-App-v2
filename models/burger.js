module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Burger', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}