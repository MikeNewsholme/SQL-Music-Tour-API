'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.addColumn(
    'event',
    'thing', 
    {type: Sequelize.STRING }
   )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'event',
      'thing',
      {type: Sequelize.STRING}
    )
  }
};
