'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id_user: 4,
      email: '4@gmail.com',
      password: '4',
      username: 'number4',
      age: 44,
      sex: 'nam',
      address: 'number4',
      phone: '44444444',
      id_role: 3
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
