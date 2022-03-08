const { Tasks } = require('../models');
const { utilCreate,utilGetAll } = require('../helpers/utilService');
const globalErr = require('../helpers/globalError');
const jwt = require('jsonwebtoken');
const { faker } = require('@faker-js/faker');

const taskMethods = {
    async createTask(req, res) {
        try {
          // We are going to create the tasks randomly instead of picking them from the request body
            await utilCreate(req, res, Tasks, {
                customer_first_name: faker.name.firstName(),
                personnel_first_name: faker.name.firstName(),
                personnel_other_name: faker.name.findName(),
                customer_last_name: faker.name.lastName(),
                customer_phone: faker.phone.phoneNumber('+2547########'),
                agentId: faker.random.alphaNumeric(4),
                assigned: new Date(),
                in_progress: new Date(),
                completed: faker.random.alpha(4),
                deferred: new Date(),
                status: faker.random.alpha(4),
                location: faker.random.alpha(4),
                gender: faker.random.alpha(4),
                age: faker.datatype.number(100),
                access_code: faker.datatype.number(),
                splash_page: faker.random.alphaNumeric(4),
                mpesa: faker.random.alphaNumeric(4),
                autoplay: faker.random.alphaNumeric(4),
                comments: faker.random.alphaNumeric(10),
                registration: faker.random.alpha(4),
            });
        } catch (error) {
            //console.error(error);
            res.status(500).json(globalErr);
        }
    },
    async listAndCountTasks(req, res, next) {
        try {
            const tasks = await utilGetAll(req, res, Tasks);
            return tasks;
        } catch (error) {
            //console.error(error);
            res.status(500).json({
                globalErr,
            });
        }
    }
};

module.exports = taskMethods;
