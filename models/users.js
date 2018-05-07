var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sch = new Schema({
    userId: {
    type: String,
    unique: true
  },
    id: {
    type: String,
    unique: true
  }
  //  versionKey: {
  //    type: String,
  //    unique:false
  //  }
});

var schi = new Schema({
    hits: {
      type: Number
    },
    url: {
      type: String,
    },
    shortUrl: {
      type: String
    },
    userId: {
      type: String
    }
});




module.exports = mongoose.model('Users', sch);

module.exports = mongoose.model('URLs', schi);
