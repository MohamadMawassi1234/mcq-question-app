require("dotenv").config()
const express = require('express')
const router = express.Router()
const User = require("../models/User")
const Question = require("../models/question")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.get("/", async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password ,10)
        const user = await User.create({ 
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        res.status(201).json({ user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})


router.post("/login", async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if (user == null) {
        return res.status(400).send("cannot find user")
    }
    try {
        console.log(user)
        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '86400s',
              })
            let isAdmin = false
            if (
                req.body.email == process.env.ADMIN_EMAIL &&
                req.body.password == process.env.ADMIN_PASSWORD
                ) isAdmin = true
            res.json({ accessToken: accessToken, isAdmin: isAdmin, username: user.username })
        } else {
            res.json({ accessToken: "null" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get("/getQuestions", authenticateToken, async (req, res) => {
    try {
        console.log(req.user.user);
        console.log(req.user.user.username); 
        // console.log(req.body)
        const questions = await Question.find()
        // console.log(question.username);
        res.json(questions.filter(question => question.username === req.user.user.username))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) return res.status(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403)
        req.user = user
        next()
    })
}

module.exports = router