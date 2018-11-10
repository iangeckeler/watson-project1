const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  text:  String,
  date:   Date,
  score: Array,
  }
);

let Item = mongoose.model('Item', itemSchema);

// let item1 = new Item({
//     text: 'today was a lot of fun',
//     date: Date.now()
// })

// console.log(item1)

export default Item;

