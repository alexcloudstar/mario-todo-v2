import { create } from 'zustand';
import { TodoType } from '../types';

interface TodosState {
  todos: TodoType[];
  isEditing: TodoType['id'] | null;
  onAdd: (todo: TodoType) => void;
  onToggle: (todoId: TodoType['id']) => void;
  onDelete: (todoId: TodoType['id']) => void;
  onToggleEdit: (todoId: TodoType['id']) => void;
  onUpdate: (todoId: TodoType['id'], title: TodoType['title']) => void;
}

export const useTodosStore = create<TodosState>(set => ({
  isEditing: null,
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
  onAdd: todo => set(state => ({ todos: [...state.todos, todo] })),
  onToggle: todoId =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      ),
    })),
  onDelete: todoId =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== todoId),
    })),
  onToggleEdit: todoId =>
    set(state => ({
      isEditing: state.isEditing === todoId ? null : todoId,
    })),
  onUpdate: (todoId, title) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === todoId ? { ...todo, title } : todo
      ),
    })),
}));
