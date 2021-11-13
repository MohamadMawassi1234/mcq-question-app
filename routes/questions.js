const express = require('express')
const router = express.Router()
const Question = require("../models/question")
// Getting all
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find({status: "available"})
    res.json(questions)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/requested', async (req, res) => {
  try {
    const questions = await Question.find({status: "requested"})
    res.json(questions)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting all shuffled
router.get('/shuffle', async (req, res) => {
  try {
    const questions = await Question.find({status: "available"})
    shuffle(questions)
    shuffle(questions)
    res.json(questions)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getQuestion, (req, res) => {
  res.json(res.question)
})

// Creating one
router.post('/', async (req, res) => {
  const question = new Question({
    question: req.body.question,
    correct: req.body.correct,
    wrong1: req.body.wrong1,
    wrong2: req.body.wrong2,
    wrong3: req.body.wrong3,
    username: req.body.username,
    status: req.body.status
  })
  try {
    const newQuestion = await question.save()
    res.status(201).json(newQuestion)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getQuestion, async (req, res) => {
  if (req.body.question != null) {
    res.question.question = req.body.question
  }
  if (req.body.correct != null) {
    res.question.correct = req.body.correct
  }
  if (req.body.wrong1 != null) {
    res.question.wrong1 = req.body.wrong1
  }
  if (req.body.wrong2 != null) {
    res.question.wrong2 = req.body.wrong2
  }
  if (req.body.wrong3 != null) {
    res.question.wrong3 = req.body.wrong3
  }
  if (req.body.status != null) {
    res.question.status = req.body.status
  }
  try {
    const updatedQuestion = await res.question.save()
    res.json(updatedQuestion)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getQuestion, async (req, res) => {
  try {
    await res.question.remove()
    res.json({ message: `Successfully Deleted Question: ${res.question.question}` })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getQuestion(req, res, next) {
  let question
  try {
    question = await Question.findById(req.params.id)
    if (question == null) {
      return res.status(404).json({ message: 'Cannot find question' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.question = question
  next()
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

module.exports = router