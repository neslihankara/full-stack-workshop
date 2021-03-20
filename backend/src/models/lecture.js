const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const lecture = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

lecture.plugin(autopopulate)

module.exports = mongoose.model('Lectuer', lecture)
