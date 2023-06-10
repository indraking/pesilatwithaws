'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const transaction_data = [
      {
      id : 1,
      name : 'Indra',
      type : 'Mobil Sigra',
      harga: 500000,
      tanggalPesan : 2023-10-10,
      tanggalKembali : 2023-10-12,     
    },
      {id : 1,
      name : 'Indra',
      type : 'Mobil Sigra',
      harga: 500000,
      tanggalPesan : 2023-10-10,
      tanggalKembali : 2023-10-12,
    },
    ];
    await queryInterface.bulkDelete('transactions', transaction_data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
