import { Button } from '..';

import { useTodosStore } from '../../store';
import { ClassesType, TodoType } from '../../types';

type TodoActionsProps = Pick<TodoType, 'id' | 'done'> & ClassesType;

const TodoActions = ({ classes, id, done }: TodoActionsProps) => {
  const [onToggle, onDelete, onToggleEdit] = useTodosStore(state => [
    state.onToggle,
    state.onDelete,
    state.onToggleEdit,
  ]);

  return (
    <>
      <Button
        classes={`${classes} mx-2`}
        text={done ? '❌' : '✅'}
        onClick={() => onToggle(parseInt(id.toString()))}
        todoId={id}
      />
      <Button
        classes={`${classes} mr-2`}
        text='🗑️'
        onClick={() => onDelete(parseInt(id.toString()))}
        todoId={id}
      />
      <Button
        classes={`${classes} mr-2`}
        text='🖊️'
        onClick={() => onToggleEdit(parseInt(id.toString()))}
        todoId={id}
      />
    </>
  );
};

export default TodoActions;
