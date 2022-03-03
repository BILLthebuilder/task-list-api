'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
          await queryInterface.bulkInsert('Users', [{
           phone: '0721123451',
            password: '123456',
            createdAt: new Date(),
           updatedAt: new Date()
          },
            {
              phone: '0721123452',
              password: '123456',
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              phone: '0721123453',
              password: '123456',
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              phone: '0721123454',
              password: '123456',
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              phone: '0721123455',
              password: '123456',
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              phone: '0721123456',
              password: '123456',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
