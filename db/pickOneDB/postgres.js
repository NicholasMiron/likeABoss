const Sequelize = require('sequelize');
require('dotenv').config();

// Add username and password into .env change database name
const sequelize = new Sequelize('trello', process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  define: {
    timestamps: true,
  },
  logging: true,
});

sequelize.authenticate()
  .then(() => console.log('Succsfully connected to DB'))
  .catch(err => console.log('Failed to connect to DB:', err));

const Cards = sequelize.define('cards', {
  cardId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  cardTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cardDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const Lists = sequelize.define('lists', {
  listId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  listName: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

const Boards = sequelize.define('boards', {
  boardId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  boardName: {
    type: Sequelize.STRING,
    allowNull: false,
  }
  
})

Boards.hasMany(Lists);
Lists.belongsTo(Boards);

Lists.hasMany(Cards);
Cards.belongsTo(Lists);

const getPerson = name => Cards.findAll({ where: { name } });

const addCard = (boardId, listId, card) => {
  return Cards.create({cardTitle: card.title, cardDescription: card.description, listId:1})
}

module.exports = { addCard };
