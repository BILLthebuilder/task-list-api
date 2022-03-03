const { User } = require('../models');
const { utilCreate } = require('../helpers/utilService');
const globalErr = require('../helpers/globalError');
const jwt = require('jsonwebtoken');
const convertTime = require('../helpers/convertTime');
require('dotenv').config();

const userMethods = {
    async signup(req, res) {
        try {
            const { phone, password, } = req.body;
            await utilCreate(req, res, User, {
                phone,
                password,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json(globalErr);
        }
    },
    async login(req, res, next) {
        try {
            const response = await User.checkCredentials(req.body.phone, req.body.password);
            if (response === User) {
                const token = await User.generateToken(req.body.phone);
                const decoded = jwt.verify(token, process.env.SECRET);
                const expiry = convertTime(decoded.exp);
                return res.status(200).json({
                    'reset_password': 0,
                    'accessToken': token,
                    'expires_in': expiry
                });
            } else {
                return res.status(401).json({
                   error:response.error
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                globalErr,
            });
        }
    }
};

module.exports = userMethods;
