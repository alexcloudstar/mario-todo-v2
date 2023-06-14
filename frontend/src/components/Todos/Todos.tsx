import { useTodosStore } from '../../store';

const Todos = () => {
  const todos = useTodosStore(state => state.todos);

  return (
    <div className=''>
      {todos.map(todo => (
        <div key={todo.id} className=''>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default Todos;
