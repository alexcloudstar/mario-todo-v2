type ButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  classes?: string;
  todoId?: number;
};

const Button = ({ text, classes, todoId, onClick }: ButtonProps) => (
  <button id={todoId?.toString()} className={classes} onClick={onClick}>
    {text}
  </button>
);

export default Button;
