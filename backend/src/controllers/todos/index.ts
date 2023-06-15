import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

const prisma = new PrismaClient();
export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = await prisma.todo.findMany();

    return res.status(200).json({ todos });
  } catch (error: any) {
    next(error);
  }
};

export const getUserTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;

    const todos = await prisma.todo.findMany({
      where: {
        userId,
      },
    });
    return res.status(200).json({ todos });
  } catch (error: any) {
    next(error);
  }
};

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, userId } = req.body;
    const todo = await prisma.todo.create({
      data: {
        title,
        userId,
      },
    });
    return res.status(201).json({ todo });
  } catch (error: any) {
    next(error);
  }
};

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { title, done } = req.body;
    const todo = await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        done,
      },
    });
    return res.status(200).json({ todo });
  } catch (error: any) {
    next(error);
  }
};

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(204).json({
      message: 'Todo successfully deleted',
    });
  } catch (error: any) {
    next(error);
  }
};
