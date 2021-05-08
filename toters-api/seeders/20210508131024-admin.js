'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Students', [{
      firstname: 'German',
      lastname: 'Guaigua',
      mail: 'gerguaigua@gmail.com',
      birth: '',
      country: 'Venezuela',
      urlphoto: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: 'Barbara',
      lastname: 'Villegas',
      mail: 'barbaraavillegas@gmail.com',
      birth: '',
      country: 'Venezuela',
      urlphoto: '',
      createdAt: new Date(),
      updatedAt: new Date()    
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
