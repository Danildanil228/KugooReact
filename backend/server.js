const { text } = require("body-parser")
const {query} = require("express")
const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password:"12345",
    host:'localhost',
    port:'5432',
    database:"kugoo"
})
module.exports = {
    query:(text,params) => pool.query(text,params)
}