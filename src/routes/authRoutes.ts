import {Router, Request, Response} from 'express';

const router = Router();

// GET /users - Retrieve all users
router.get('/users', (req: Request, res: Response) => {
    res.json(users);
});


export default router;