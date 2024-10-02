'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id_user: 3,
      email: '3@gmail.com',
      password: '3',
      username: 'number3',
      age: 33,
      sex: 'nam',
      address: 'number3',
      phone: '33333333',
      id_role: 2
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
