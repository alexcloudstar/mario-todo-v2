import { useForm } from 'react-hook-form';

const Input = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ todo: string }>();
  const onSubmit = (data: { todo: string }) => console.log(data.todo);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Enter your todo'
          {...register('todo', { required: true })}
          className='mx-2 py-1.5 px-2.5 outline-0'
        />
        <button
          type='submit'
          className='py-1.5 px-2.5 bg-[#799ef6] rounded-md text-white'
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
