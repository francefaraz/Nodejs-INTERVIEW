const mysql = require("mysql2")
const fs = require("fs")


// Read SQL seed query
const seedQuery = fs.readFileSync("dbconfig/restaurants.sql", {
  encoding: "utf-8",
})

// Connect to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"hotel",
  multipleStatements: true, 
})

connection.connect()

console.log("Running SQL seed...")

// Run seed query
connection.query(seedQuery,err => {
  if (err) {
    throw err
  }

  console.log("SQL seed completed!")
  connection.end()
})