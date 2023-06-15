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
  setTodos: (todos: TodoType[]) => void;
}

interface InputState {
  value: string;
  setValue: (value: string) => void;
}

export const useTodosStore = create<TodosState>(set => ({
  isEditing: null,
  todos: [],
  setTodos: todos => set(() => ({ todos })),
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

export const useInputStore = create<InputState>(set => ({
  value: '',
  setValue: (value: string) => set(() => ({ value })),
}));
