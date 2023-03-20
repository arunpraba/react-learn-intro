import * as React from 'react';
import './style.css';

const useCount = () => {
  const [count, setCount] = React.useState<number>(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return { count, setCount, handleClick };
};

const Button = ({ count, onClick }) => {
  return (
    <button style={{ margin: '10px' }} onClick={onClick}>
      Button clicked {count} times
    </button>
  );
};

export default function App() {
  const { count, handleClick } = useCount();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button count={count} onClick={handleClick} />
      <br />
      <Button count={count} onClick={handleClick} />
    </div>
  );
}
