import { useInputStore, useTodosStore } from '../../store';
import { Todo } from '../Todo';
import { TodoActions } from '../TodoActions';

const Todos = () => {
  const [todos, editedTodo, onToggleEdit, onUpdate] = useTodosStore(state => [
    state.todos,
    state.isEditing,
    state.onToggleEdit,
    state.onUpdate,
  ]);

  const setValue = useInputStore(state => state.setValue);

  const classes = `bg-slate-50 py-1 px-3 rounded-md text-zinc-900 cursor-pointer transition-all ease-out duration-200 hover:bg-slate-100 hover:text-slate-500`;

  const onSubmit = (data: { editedTodo: string }) => {
    onToggleEdit(-1);
    onUpdate(parseInt(editedTodo?.toString() ?? ''), data.editedTodo);
    setValue('');
  };

  return (
    <ul className='my-5 w-full'>
      {todos.map(todo => (
        <div className='flex items-center justify-between' key={todo.id}>
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
      ))}
    </ul>
  );
};

export default Todos;
