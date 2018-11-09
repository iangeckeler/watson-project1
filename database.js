const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb+srv://iangeckeler:XgfW1LujNdE48jE6@cluster0-egtro.mongodb.net/test?retryWrites=true')
.then(result => {
  console.log('connected')
})
.catch(err => {
  console.log(err);
})
