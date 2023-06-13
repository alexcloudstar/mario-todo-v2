import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();
export const getTodos = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany();
  return res.status(200).json({ todos });
};

export const createTodo = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const todo = await prisma.todo.create({
    data: {
      title,
    },
  });
  return res.status(201).json({ todo });
};
