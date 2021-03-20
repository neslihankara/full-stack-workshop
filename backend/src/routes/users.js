const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await User.find())
})

router.post('/', async (req, res) => {
  const user = await User.create(req.body)

  res.status(201).send(user)
})

router.post('/:id/attended-courses', async (req, res) => {
  const user = await User.findById(req.params.id)

  // eslint-disable-next-line no-underscore-dangle
  user.attendedCourses.push(req.body._id)

  await user.save()

  res.sendStatus(200)
})
module.exports = router
