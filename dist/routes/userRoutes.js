"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Dummy data to simulate a database
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
];
// GET /users - Retrieve all users
router.get('/users', (req, res) => {
    res.json(users);
});
// GET /users/:id - Retrieve a user by ID
router.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
// POST /users - Create a new user
router.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
// PUT /users/:id - Update a user
router.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
// DELETE /users/:id - Delete a user
router.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.status(204).send();
});
exports.default = router;
