const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    // that would make sense if we have common lectures between courses
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecture',
        autopopulate: { maxDepth: 2 },
      },
    ],
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { maxDepth: 2 },
      },
    ],
  },
  { timestamps: true }
)

courseSchema.plugin(autopopulate)

module.exports = mongoose.model('Course', courseSchema)
