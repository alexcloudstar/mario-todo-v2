type ButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  classes?: string;
  todoId?: number;
  disabled?: boolean;
};

const Button = ({
  text,
  classes,
  todoId,
  onClick,
  disabled = false,
}: ButtonProps) => (
  <button
    id={todoId?.toString()}
    className={`${classes} disabled:cursor-not-allowed disabled:opacity-50`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
