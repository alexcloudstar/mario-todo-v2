import { Button } from '..';
import { API_URL } from '../../constants';

import { useInputStore, useTodosStore } from '../../store';
import { ClassesType, TodoType } from '../../types';

type TodoActionsProps = {
  onSubmit?: (data: { editedTodo: string; id: number }) => void;
} & Pick<TodoType, 'id' | 'done'> &
  ClassesType;

const TodoActions = ({ classes, id, done, onSubmit }: TodoActionsProps) => {
  const [todos, isEditing, onToggle, onDelete, onToggleEdit] = useTodosStore(
    state => [
      state.todos,
      state.isEditing,
      state.onToggle,
      state.onDelete,
      state.onToggleEdit,
    ]
  );

  const value = useInputStore(state => state.value);

  const onToggleStatus = async () => {
    onToggle(parseInt(id.toString()));
    const findedTodo = todos.find(todo => todo.id === id);

    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          done: !findedTodo?.done,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteMethod = async () => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }

    onDelete(id);
  };

  return (
    <>
      <Button
        classes={`${classes} mx-2`}
        text={done && isEditing !== id ? '❌' : '✅'}
        onClick={
          isEditing === id && onSubmit
            ? () => onSubmit({ editedTodo: value, id })
            : onToggleStatus
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
        onClick={onDeleteMethod}
        todoId={id}
        disabled={isEditing === id}
      />
    </>
  );
};

export default TodoActions;
