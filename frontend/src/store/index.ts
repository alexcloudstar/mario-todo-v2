import { create } from 'zustand';
import { Todo } from '../types';

interface TodosState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

export const useTodosStore = create<TodosState>(set => ({
  todos: [],
  addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
}));
