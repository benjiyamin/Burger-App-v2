module.exports = function (sequelize, DataTypes) {
  let Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Customer.associate = function (models) {
    Customer.hasMany(models.Burger, {
      onDelete: 'CASCADE'
    })
  }

  return Customer
}