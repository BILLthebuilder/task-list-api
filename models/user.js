'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSaltSync();
    user.password = await bcrypt.hashSync(user.password, salt);
  });
  User.checkCredentials = async function (phone, password) {
    const user = await User.findOne({ where: { phone } });
    if (!user) {
      throw new Error('The user with that phone does not exist, signup first');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Wrong phone/password combination');
    }
    return user;
  };
  // User.generateToken = async function (phone) {
  //   const user = await User.findOne({ where: { phone } });
  //   const tokenField = user.token;
  //   const gentoken = jwt.sign({ id: user.id.toString(), role: user.role }, process.env.SECRET);
  //   user.update(gentoken, { where: { token: tokenField } });
  //   return gentoken;
  // };
  return User;
};
