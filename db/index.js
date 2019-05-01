const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

// Get uri from Atlas and use password in .env
const uri = 'mongodb://localhost:27017/trello';
mongoose.connect(uri, { useNewUrlParser: true });

const dbSchema = mongoose.Schema({
  _id: Number,
  lists: [
    {
      name: String,
      cards: [
        {
          title: String,
          description: String,
          people: [String],
          labels: [String],
          dueBy: String
        }
      ]
    }
    ], 
});

const Board = mongoose.model('boards', dbSchema);

// const addNewPerson = (name, age) => {
//   const newPerson = new Board({ name, age });
//   newPerson.save();
// };

const getBoard = boardId => Board.findOne({ _id: boardId });

const addBoard = (boardId, lists) => {
  const newBoard = new Board({_id: boardId, lists: lists})
  return newBoard.save();
}

const getList = (listTitle) => (
  Board.findOne({ 'lists.title': listTitle })
)

const addList = (boardId, list) => (
  Board.findOneAndUpdate(
    { _id: boardId },
    { $push: {lists: list}},
    { new: true}
  )
)

module.exports = {
  getBoard, 
  addBoard, 
  getList, 
  addList
};
