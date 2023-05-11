import React, { ChangeEvent, useState } from 'react';

import './SwapForm.scss';
import { ComboBox } from '../ComboBox/ComboBox';
import { TextField } from '../TextField/TextField';
import { AssetSwitchButton } from '../AssetSwitchButton/AssetSwitchButton';
import { Button } from '../Button/Button';


export const SwapForm = () => {
  const [amount, setAmount] = useState('0');
  const onChangeAmount = (e: any) => {
    const value = e.target.value;

    // Only update the state if the value is a number or empty (to allow deletion)
    if (!isNaN(value) || value === '') {
      setAmount(value);
    }
  }

  return (
    <section className='swap-container'>
      <div className='swap-params-box'>
        <label>From Asset: </label>
        <ComboBox options={["USDC", "USDT", "DAI"]}/>
      </div>
      <div className='swap-params-box'>
        <label>Amount: </label>
        <TextField value={amount}  onChange={onChangeAmount}/>
      </div>
      <div className='swap-params-box action-button'>
        <AssetSwitchButton/>
      </div>
      <div className='swap-params-box'>
        <label>To Asset: </label>
        <ComboBox options={["USDC", "USDT", "DAI"]}/>
      </div>
      <div className='swap-params-box action-button'>
        <Button label='Calculate' primary={true}/>
      </div>
    </section>
  );
};
