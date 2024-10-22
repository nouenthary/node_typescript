import {Router, Request, Response} from 'express';

const router = Router();

// Dummy data to simulate a database
let users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Smith'},
];

// GET /users - Retrieve all users
router.get('/users', (req: Request, res: Response) => {
    res.json(users);
});

// GET /users/:id - Retrieve a user by ID
router.get('/users/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({message: 'User not found'});
    }
});

// POST /users - Create a new user
router.post('/users', (req: Request, res: Response) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id - Update a user
router.put('/users/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).json({message: 'User not found'});
    }
});

// DELETE /users/:id - Delete a user
router.delete('/users/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.status(204).send();
});

export default router;
