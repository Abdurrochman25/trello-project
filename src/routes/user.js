let express = require('express')
let json = require('body-parser/lib/types/json')
let router = express()
let con = require('../models/models')

// POST Register User
router.post('/user', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Missing body request')
  }

  let sql = "INSERT INTO users(username, email, password) VALUES ('" + `${req.body.username}` + "','" + `${req.body.email}` + "','" + `${req.body.password}` + "')"
  con.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).send("Data stored")
  })
})

// POST Login User


module.exports = router