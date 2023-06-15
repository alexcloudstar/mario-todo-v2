import { useTodosStore } from '../../store';
import { Todo } from '../Todo';

const Todos = () => {
  const [todos] = useTodosStore(state => [state.todos]);

  const classes = `bg-slate-50 py-1 px-3 rounded-md text-zinc-900 cursor-pointer transition-all ease-out duration-200 hover:bg-slate-100 hover:text-slate-500`;

  return (
    <ul className='my-5 w-full'>
      {todos.map(todo => (
        <div className='flex items-center justify-between'>
          <Todo
            id={todo.id}
            title={todo.title}
            done={todo.done}
            classes={classes}
          />
        </div>
      ))}
    </ul>
  );
};

export default Todos;
