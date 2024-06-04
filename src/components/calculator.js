/**
 * @file Simple Calculator component for example purposes.
 */

import React, { useRef, useState } from 'react';

type InputRef = React.RefObject<HTMLInputElement>;

const getSum = (value1: number, value2: number): number => {
  return value1 + value2;
};

const Calculator: React.FC = () => {
  const inputValueOne: InputRef = useRef(null);
  const inputValueTwo: InputRef = useRef(null);
  const [sum, setSum] = useState<number | null>(null);

  const add = (): void => {
    if (inputValueOne.current && inputValueTwo.current) {
      const result = getSum(
        parseFloat(inputValueOne.current.value),
        parseFloat(inputValueTwo.current.value),
      );

      setSum(result);
    }
  };

  return (
    <form>
      <input type="number" defaultValue={0} ref={inputValueOne} />
      <input type="number" defaultValue={0} ref={inputValueTwo} />
      <button type="button" onClick={add} aria-label="Add" />
      <p className="result">{sum}</p>
    </form>
  );
};

export { getSum };
export default Calculator;