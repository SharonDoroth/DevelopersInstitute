const knex = require('knext');
const dotenv = require('dotenv').config()

const db = knex({
    client:'pg',
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        
    }
})