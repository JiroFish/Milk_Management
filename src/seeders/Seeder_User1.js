'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id_user: 2,
      email: '2@gmail.com',
      password: '2',
      username: 'number2',
      age: 22,
      sex: 'nam',
      address: 'number2',
      phone: '22222222',
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
