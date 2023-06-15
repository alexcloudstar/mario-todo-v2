import { TodoType } from '../../types';

type TodoProps = {
  classes: string;
} & Pick<TodoType, 'id' | 'done' | 'title'>;

const Todo = ({ id, done, title, classes }: TodoProps) => (
  <li
    key={id}
    className={`my-5 min-w-[150px] ${classes} ${
      done ? 'line-through bg-green-400' : ''
    }`}
  >
    {title}
  </li>
);
export default Todo;
