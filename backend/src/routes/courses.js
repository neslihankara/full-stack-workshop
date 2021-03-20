const express = require('express')
const Course = require('../models/course')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await Course.find())
})

router.post('/', async (req, res) => {
  try {
    const course = await Course.create(req.body)

    res.status(201).send(course)
  } catch (e) {
    // we return 500 in any case
    // it would make sense return different responses accordingly
    res.sendStatus(400).send({
      message: e.message,
    })
  }
})

module.exports = router
