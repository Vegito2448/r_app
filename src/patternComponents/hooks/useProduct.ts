import { useState } from 'react';

const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => setCounter(prevCounter => Math.max(prevCounter + value, 0));

  return (
    { counter, increaseBy }
  );
};

export default useProduct;