"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Maps",
      [
        {
          user_id: 1,
          pA: "Санкт-Петербург, метро Чернышевская",
          pB: "Санкт-Петербург, Эрмитаж",
          name: "Питерская элита",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          pA: "Санкт-Петербург, Кудрово",
          pB: "Санкт-Петербург, Думская",
          name: "Питерская разборка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          pA: "Ставрополь",
          pB: "Невинномысск",
          name: "От Вовы к Игорю",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
