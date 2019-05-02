const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

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

const userSchema = mongoose.Schema({
  username: String,
  password: String
})

const Board = mongoose.model('boards', dbSchema);
const User = mongoose.model('users', userSchema);

const getBoard = boardId => Board.findOne({ _id: boardId });

const addBoard = (boardId, lists) => {
  const newBoard = new Board({_id: boardId, lists: lists})
  return newBoard.save();
}

const getList = (listTitle) => (
  Board.findOne({ 'lists.title': listTitle })
)

const addList = (boardId, list) => Board.findOneAndUpdate(
    { _id: boardId },
    { $push: {lists: list}},
    { new: true}
)

const updateLists = (boardId, lists) => Board.findOneAndUpdate(
  {_id: boardId},
  {lists: lists},
  {new: true}
)

const checkForUser = (username) => User.findOne({ username })

module.exports = {
  getBoard, 
  addBoard, 
  getList, 
  addList,
  updateLists,
  checkForUser
};
