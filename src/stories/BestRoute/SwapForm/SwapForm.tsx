import React, { ChangeEvent, useState } from 'react';

import './SwapForm.scss';
import { ComboBox } from '../ComboBox/ComboBox';
import { TextField } from '../TextField/TextField';
import { AssetSwitchButton } from '../AssetSwitchButton/AssetSwitchButton';
import { Button } from '../Button/Button';
import { findUniswapBestRoute } from '../../../utils/uniswap';
import { findBalancerBestRoute } from '../../../utils/balancer';
import { findCurveBestRoute } from '../../../utils/curve';

export const SwapForm = () => {
  const [amount, setAmount] = useState('0');
  const [swap, setSwap] = useState('');
  const [swapFrom, setSwapFrom] = useState('');
  const [swapTo, setSwapTo] = useState('');
  const onChangeAmount = (e: any) => {
    const value = e.target.value;

    // Only update the state if the value is a number or empty (to allow deletion)
    if (!isNaN(value) || value === '') {
      setAmount(value);
    }
  }

  const onChangeSwap = (item: string) => {
    setSwap(item);
  }

  const onChangeSwapFrom = (item: string) => {
    setSwapFrom(item);
  }

  const onChangeSwapTo = (item: string) => {
    setSwapTo(item);
  }

  const onSwitchAsset = () => {
    setSwapFrom(swapTo);
    setSwapTo(swapFrom);
  }

  const handleSwap = () => {
    if (swap === 'Uniswap') {
      findUniswapBestRoute(
        '1000',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        6,
        'USDC',
        '0x853d955aCEf822Db058eb8505911ED77F175b99e',
        18,
        'FRAX'
      ).then(result => console.log(result));
    }
    
    if (swap === 'Curve') {
      findCurveBestRoute(
        '1000',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0x853d955aCEf822Db058eb8505911ED77F175b99e',
      ).then(result => console.log(result));
    }

    if (swap ==='Balancer') {
      findBalancerBestRoute(
        '1000000000',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0x853d955aCEf822Db058eb8505911ED77F175b99e',
        1
      ).then(result => console.log(result));
    }
  }

  return (
    <section className='swap-container'>
      <div className='swap-params-box'>
        <label>Select Swap: </label>
        <ComboBox options={["Uniswap", "Curve", "Balancer"]} value={swap} onChange={onChangeSwap}/>
      </div>
      <div className='swap-params-box'>
        <label>From Asset: </label>
        <ComboBox options={["USDC", "USDT", "DAI"]} value={swapFrom} onChange={onChangeSwapFrom}/>
      </div>
      <div className='swap-params-box'>
        <label>Amount: </label>
        <TextField value={amount}  onChange={onChangeAmount}/>
      </div>
      <div className='swap-params-box action-button'>
        <AssetSwitchButton onClick={onSwitchAsset}/>
      </div>
      <div className='swap-params-box'>
        <label>To Asset: </label>
        <ComboBox options={["USDC", "USDT", "DAI"]} value={swapTo} onChange={onChangeSwapTo}/>
      </div>
      <div className='swap-params-box action-button'>
        <Button label='Calculate' primary={true} onClick={handleSwap}/>
      </div>
    </section>
  );
};
