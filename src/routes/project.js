let express = require('express')
let router = express()
let json = require('body-parser/lib/types/json')
let con = require('../models/models')

// Create Project
router.post('/project', (req, res) => {
    if (!req.body) {
      return res.status(400).send('Missing body request')
    }
  
    let sql = "INSERT INTO projects(name, status) VALUES ('" + `${req.body.name}` + "','" + `${req.body.status}` + "')"
    con.query(sql, (err, result) => {
          if (err) throw err
          res.status(200).send("Data stored")
    })
})

// Get Project
router.get('/project', (req, res) => {
    let sql = "SELECT * FROM projects"
    con.query(sql, (err, result) => {
          if (err) throw err
          res.status(200).json(result)
    })
})

module.exports = router