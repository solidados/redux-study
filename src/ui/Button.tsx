import { FC, MouseEventHandler } from 'react';

type ButtonType = {
  cb: (cash: number) => void
  text: string
}

const Button: FC<ButtonType> = ({cb, text}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    const cash: number = Number(prompt("Enter cash:")) || 0;
    cb(cash);
  };
  
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

export default Button;
