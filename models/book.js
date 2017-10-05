'use strict'
module.exports = function (sequelize, DataTypes) {

  var Book = sequelize.define('Book', {
    title: DataTypes.STRING
  })

  Book.associate = function (models) {
    Book.belongsTo(models.Author)
  }
  return Book
}
