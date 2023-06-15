import { create } from 'zustand';
import { Todo } from '../types';

interface TodosState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

export const useTodosStore = create<TodosState>(set => ({
  todos: [
    {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Wash the dishes',
      done: false,
      userSessionId: '1',
    },
    {
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Do the laundry',
      done: false,
      userSessionId: '1',
    },
    {
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Walk the dog',
      done: false,
      userSessionId: '1',
    },
    {
      id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Take out the trash',
      done: true,
      userSessionId: '1',
    },
    {
      id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Buy groceries',
      done: false,
      userSessionId: '1',
    },
  ],
  addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
}));
