const express = require("express")
const pool = require("../config/dbcon")
const route = express.Router()



route.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password])
        res.json(user.rows)
    } catch {
        res.send("User not found")
    }
})

// register user 
route.post('/register', async (req, res) => {
    try {
        const { email, password,role } = req.body
        const user = await pool.query('INSERT INTO users (email,password,role) VALUES ($1, $2,$3) RETURNING *', [email, password,role])
        res.status(201).json(user.rows)
    } catch {
        res.send("Not able to create user")
        
    }
})

module.exports = route