import { Button } from '..';

import { useInputStore, useTodosStore } from '../../store';
import { ClassesType, TodoType } from '../../types';

type TodoActionsProps = {
  onSubmit?: (data: { editedTodo: string }) => void;
} & Pick<TodoType, 'id' | 'done'> &
  ClassesType;

const TodoActions = ({ classes, id, done, onSubmit }: TodoActionsProps) => {
  const [isEditing, onToggle, onDelete, onToggleEdit] = useTodosStore(state => [
    state.isEditing,
    state.onToggle,
    state.onDelete,
    state.onToggleEdit,
  ]);

  const value = useInputStore(state => state.value);

  return (
    <>
      <Button
        classes={`${classes} mx-2`}
        text={done && isEditing !== id ? '❌' : '✅'}
        onClick={
          isEditing === id && onSubmit
            ? () => onSubmit({ editedTodo: value })
            : () => onToggle(parseInt(id.toString()))
        }
        todoId={id}
        // disabled={isEditing === id}
      />
      <Button
        classes={`${classes} mr-2`}
        text={isEditing === id ? '🚫' : '✏️'}
        onClick={() => onToggleEdit(parseInt(id.toString()))}
        todoId={id}
        disabled={done && isEditing !== id}
      />
      <Button
        classes={`${classes} mr-2`}
        text='🗑️'
        onClick={() => onDelete(parseInt(id.toString()))}
        todoId={id}
        disabled={isEditing === id}
      />
    </>
  );
};

export default TodoActions;
