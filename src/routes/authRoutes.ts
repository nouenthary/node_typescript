import {Router, Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// GET /users - Retrieve all users
// router.get('/login', (req: Request, res: Response) => {
//     res.json({data: 'login'});
// });

// app.get('/login', async (req: Request, res: Response) => {
//   //const { name, email, password } = req.body;
//   try {
//     const user = await prisma.user.create({
//       data: {
//         name : "admin",
//         email: "admin@example.com",
//         password: "12345678",
//       },
//     });
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ error: 'User creation failed' });
//   }
// });

// Get all users
router.get('/login', async (req: Request, res: Response) => {
    try {

        await prisma.user.create({
            data: {
                name: "admin",
                email: Math.random() + "_admin@example.com",
                password: "12345678",
            },
        });

        const users = await prisma.user.findMany({});

        const count = await prisma.user.count({});

        res.status(200).json({
          count,
          users,
        });
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch users'});
    }
});


export default router;