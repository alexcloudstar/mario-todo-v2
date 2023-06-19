import { useInputStore, useTodosStore } from '../../store';
import { TodoType } from '../../types';

type TodoProps = {
  classes: string;
} & Pick<TodoType, 'id' | 'done' | 'title'>;

const Todo = ({ id, done, title, classes }: TodoProps) => {
  const [isEditing] = useTodosStore(state => [state.isEditing]);
  const setValue = useInputStore(state => state.setValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return isEditing === id ? (
    <>
      <input
        className='my-2 max-w-[150px] outline-0 py-1 px-3 rounded-md text-zinc-900'
        placeholder={title}
        onChange={onChange}
      />
    </>
  ) : (
    <li
      key={id}
      className={`my-2 w-[150px] ${classes} overflow-hidden ${
        done ? 'line-through !bg-green-400' : ''
      }`}
    >
      {title}
    </li>
  );
};
export default Todo;
