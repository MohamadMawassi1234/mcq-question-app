const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  }
})

module.exports = mongoose.model('User', UserSchema)
