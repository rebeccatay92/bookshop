'use strict'
module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING
  })
  Author.associate = function (models) {
    Author.hasMany(models.Book)
  }
  return Author
}
