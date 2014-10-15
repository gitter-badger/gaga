'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  players: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  admin:{
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  }
});

mongoose.model('Team', TeamSchema);
