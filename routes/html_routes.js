const express = require('express')

const db = require('../models')


const router = express.Router()


router.get('/', function (request, response) {
  db.Burger.findAll({
    include: [db.Customer]
  })
    .then(burgers => {
      // Separate uneaten and eaten bugers into two different groupings
      let uneaten = []
      let eaten = []
      burgers.forEach(b => {
        if (b.devoured) {
          eaten.push(b)
        } else {
          uneaten.push(b)
        }
      })

      response.render('index', {
        uneaten: uneaten,
        eaten: eaten,
      })
    })
    .catch(() => {
      response.status(500).end()
    })
})


router.get('/customers', function (request, response) {
  db.Customer.findAll({
      include: [db.Burger]
    })
    .then(customers => {
      response.render('customers', {
        customers: customers
      })
    })
    .catch(() => {
      response.status(500).end()
    })
})


module.exports = router