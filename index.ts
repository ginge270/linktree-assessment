import express, { Application, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const app: Application = express();
const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 3000;

app.get("/", (_req, res: Response) => {
    res.send(`Server is running on port: ${port}`);
});

// Adding todo route
app.post('/api/todos', async (req: Request, res: Response) => {
    try {
        const { title, description, completed } = req.body;
        const newTodo = await prisma.todo.create({
            data: {
                title,
                description,
                completed
            }
        });
        return res.json({
            success: true,
            data: newTodo
        });
    } catch (error) {
        return res.json({
            success: false,
            message: error
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})