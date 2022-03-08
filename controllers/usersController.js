const { User } = require('../models');
const { utilCreate } = require('../helpers/utilService');
const globalErr = require('../helpers/globalError');
const jwt = require('jsonwebtoken');

const userMethods = {
    async signup(req, res) {
        try {
            const { phone, password, } = req.body;
            await utilCreate(req, res, User, {
                phone,
                password,
            });
        } catch (error) {
            //console.error(error);
            res.status(500).json(globalErr);
        }
    },
    async login(req, res, next) {
        try {
            const { phone, password } = req.body;
            const response = await User.checkCredentials(phone, password);
            if (('error') in response) {
                return res.status(401).json({
                    error: response.error
                });
            } else {
                const token = await User.generateToken(req.body.phone);
                const decoded = jwt.verify(token, process.env.SECRET);
                return res.status(200).json({
                    'reset_password': 0,
                    'accessToken': token,
                    'expires_in': decoded.exp
                });
            }
        } catch (error) {
            //console.error(error);
            res.status(500).json({
                globalErr,
            });
        }
    }
};
module.exports = userMethods;
