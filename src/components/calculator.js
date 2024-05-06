/**
 * @file Simple Calculator component for example purposes.
 */

import React, { useRef, useState } from 'react';

type NumberOrNull = number | null;

const getSum = (value1: number, value2: number): number => {
  return value1 + value2;
};

const Calculator: React.FC = () => {
  const inputValueOne = useRef<HTMLInputElement>(null);
  const inputValueTwo = useRef<HTMLInputElement>(null);
  const [sum, setSum] = useState<NumberOrNull>(null);

  const add = () => {
    const result = getSum(
      parseFloat(inputValueOne.current?.value || '0'),
      parseFloat(inputValueTwo.current?.value || '0'),
    );

    setSum(result);
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