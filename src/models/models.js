let mysql = require('mysql')

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "trello"
})

con.connect((err) => {
    if (err) throw err
    console.log("Connected!")
    let users = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        username VARCHAR(255) NOT NULL, 
        email VARCHAR(255) NOT NULL, 
        password VARCHAR(255) NOT NULL, 
        token VARCHAR(255)
        )`
    con.query(users, (err, result) => {
        if (err) throw err
        console.log("Table users created")
    })

    let projects = `CREATE TABLE IF NOT EXISTS projects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL
    )`
    con.query(projects, (err, result) => {
      if (err) throw err
      console.log("Table projects created")
    })

    let projectUser = `CREATE TABLE IF NOT EXISTS project_user (
      user_id INT,
      project_id INT
    )`
    con.query(projectUser, (err, result) => {
      if (err) throw err
      console.log("Table project_user created")
    })

    let cards = `CREATE TABLE IF NOT EXISTS cards (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      project_id INT FOREIGN KEY
    )`
    con.query(cards, (err, result) => {
      if (err) throw err
      console.log("Table cards created")
    })

    let tasks = `CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      card_id INT FOREIGN KEY
    )`
    con.query(tasks, (err, result) => {
      if (err) throw err
      console.log("Table tasks created")
    })
})

// globalThis.con = con
module.exports = con