'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GameSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  teamgame: {
    type: Boolean,
    default: false
  },
  rounds: {
    type: Number,
    default: 5
  }
});

mongoose.model('Game', GameSchema);
