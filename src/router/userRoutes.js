const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// API Routes

// CREATE POST /users
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

// READ GET /users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users)
    }
    catch (e) {
        res.status(500).send()
    }

})

// READ GET /users/:id
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch (e) {
        res.send(500).send()
    }

})

// UPDATE PATCH /users/:id
router.patch('/users/:id', async (req, res) => {
    // make updates only to allowed properties
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'age', 'email']
    const isValidOperation = updates.every((item) => allowedUpdates.includes(item))

    if (!isValidOperation) {
        return res.status(400).send("Invalid Request");
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch (e) {
        res.status(400).send()
    }

})

// DELETE DELETE /users/:id

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.send(404).send()
        }
        res.send(200).send(user)

    }
    catch (e) {
        res.status(500).send()
    }
})

module.exports = router