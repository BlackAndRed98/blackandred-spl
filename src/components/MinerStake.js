import React from 'react';
import { Container, Table } from 'react-bootstrap';
export const MinerStake = () => { 
  return (
    <section className='minerGameSection'>
    <ul className='minerStake-table'>
      <li className='minerStake-firstrow'>
        <h3>Get your miners</h3>
        <h5>And win the stake pot</h5>
        <p>lorem seasoned dada nmadoi  kandfonf o nmiogfnmao ko goikwenag onao oamwfokgof a gowg oagoi wo aoag owikwg okag ok gimogim </p>
      </li>
      <li className='minerStake-secondrow'>
        <label htmlFor='token'>BNB to introduce:</label>
        <input type='number' id='token' />

        <div className='MinerStakeButtons'>
        <button type='submit'>STAKE</button>
        <button type='submit'>UNSTAKE</button>
        <button type='submit'>Claim</button>
      </div>
      </li>
    </ul></section>
  );
};
