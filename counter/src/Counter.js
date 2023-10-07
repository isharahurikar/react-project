import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
console.log(count);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
} 