const express = require('express')

const db = require('../models')


const router = express.Router()


router.get('/api/burgers', function (request, response) {
  db.Burger.findAll({})
    .then(data => {
      response.json(data)
    })
    .catch(() => {
      response.status(500).end()
    })
})


router.post('/api/burgers', function (request, response) {
  db.Burger.create(request.body)
    .then(data => {
      response.json(data)
      //response.status(204).end()
    })
    .catch(() => {
      response.status(500).end()
    })
})


router.put('/api/burgers/:id', function (request, response) {
  db.Burger.update(request.body, {
      where: {
        id: request.params.id
      }
    })
    .then(data => {
      response.json(data)
      //response.status(204).end()
    })
    .catch(() => {
      response.status(500).end()
    })
})


router.delete('/api/burgers/:id', function (request, response) {
  db.Burger.destroy({
      where: {
        id: request.params.id
      }
    })
    .then(() => {
      //response.json(data)
      response.status(204).end()
    })
    .catch(() => {
      response.status(500).end()
    })
})


module.exports = router