import { useEffect } from 'react';
import { API_URL } from '../../constants';
import { useInputStore, useTodosStore } from '../../store';
import { Todo } from '../Todo';
import { TodoActions } from '../TodoActions';

const Todos = () => {
  const userId = localStorage.getItem('userId');
  const [todos, editedTodo, onToggleEdit, onUpdate, setTodos] = useTodosStore(
    state => [
      state.todos,
      state.isEditing,
      state.onToggleEdit,
      state.onUpdate,
      state.setTodos,
    ]
  );

  const setValue = useInputStore(state => state.setValue);

  const classes = `bg-slate-50 py-1 px-3 rounded-md text-zinc-900 cursor-pointer transition-all ease-out duration-200 hover:bg-slate-100 hover:text-slate-500`;

  const onSubmit = async (data: { editedTodo: string; id: number }) => {
    if (!data.editedTodo) return;

    onToggleEdit(-1);
    onUpdate(parseInt(editedTodo?.toString() ?? ''), data.editedTodo);

    try {
      await fetch(`${API_URL}/todos/${data.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.editedTodo,
        }),
      });
    } catch (error) {
      console.log(error);
    }

    setValue('');
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(`${API_URL}/todos/${userId}`);
      const data = await response.json();
      setTodos(data.todos);
    };

    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className='my-5 w-full'>
      {todos?.map(todo => (
        <div
          className='flex items-center justify-between flex-wrap flex-col'
          key={todo.id}
        >
          <div>
            <Todo
              id={todo.id}
              title={todo.title}
              done={todo.done}
              classes={classes}
            />
            <TodoActions
              id={todo.id}
              done={todo.done}
              classes={classes}
              onSubmit={onSubmit}
            />
          </div>
          <span className='text-red-500'>You cannot have an empty todo</span>
        </div>
      ))}
    </ul>
  );
};

export default Todos;
