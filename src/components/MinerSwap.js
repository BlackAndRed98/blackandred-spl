import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Input1 = () => {
  return (
    <>
      <label htmlFor='token1'>Token1:</label>
      <input type='number' id='token1' />
    </>
  );
};

const Input2 = () => {
  return (
    <>
      <label htmlFor='token2'>Token2:</label>
      <input type='number' id='token2' />
    </>
  );
};

export const MinerSwap = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <section className='minerGameSection'>
      <ul className='minerStake-table'>
        <li className='minerStake-firstrow'>
          <h3>SWAP</h3>
          <h5>Trade your tokens</h5>
        </li>
        <li className='minerStake-secondrow'>
          {isSwapped ? (
            <>
              <Input2 />
              <button type='input' className='flecha' onClick={handleClick}>
              </button>
              <Input1 />
            </>
          ) : (
            <>
              <Input1 />
              <button type='input' className='flecha' onClick={handleClick}>
              </button>
              <Input2 />
            </>
          )}
          <div className='MinerStakeButtons'>
            <button type='submit'>Trade now!</button>
          </div>
        </li>
      </ul>
    </section>
  );
};
