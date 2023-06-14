import { useForm } from 'react-hook-form';
import { useTodosStore } from '../../store';
import { Todo } from '../../types';

const Input = () => {
  const [todos, addTodo] = useTodosStore(state => [state.todos, state.addTodo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ todo: string }>();

  const onSubmit = (data: { todo: string }) => {
    // Add todo to the store
    // Add todo to the database
    // clear the input
    addTodo({
      id: todos.length + 1,
      title: data.todo,
      done: false,
    } as Todo);

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Enter your todo'
          {...register('todo', { required: true })}
          className='mx-2 py-1.5 px-2.5 outline-0 rounded-md'
        />
        <button
          type='submit'
          className='py-1.5 px-2.5 bg-[#799ef6] rounded-md text-white transition ease-in-out duration-300 hover:shadow-button'
        >
          Submit
        </button>
      </form>
      {errors.todo && (
        <span className='text-[#da291c] mt-5'>This field is required</span>
      )}
    </>
  );
};

export default Input;
