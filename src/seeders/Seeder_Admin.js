'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id_user: 1,
      email: '1@gmail.com',
      password: '1',
      username: 'number1',
      age: 11,
      sex: 'nam',
      address: 'number1',
      phone: '11111111',
      id_role: 1
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
