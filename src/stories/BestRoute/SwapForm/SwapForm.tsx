import React, { ChangeEvent, useState } from 'react';

import './SwapForm.scss';
import { ComboBox } from '../ComboBox/ComboBox';
import { TextField } from '../TextField/TextField';
import { AssetSwitchButton } from '../AssetSwitchButton/AssetSwitchButton';
import { Button } from '../Button/Button';
import { findUniswapBestRoute } from '../../../utils/uniswap';
import { findBalancerBestRoute } from '../../../utils/balancer';
import { findCurveBestRoute } from '../../../utils/curve';
import { ASSETS } from '../../../utils/constants';
import { parseUnits } from 'ethers/lib/utils';

interface SwapFormProps {
  /**
   * Callback fired when the swap result is available.
   */
  onChangeResult: (result: string) => void;
  onLoading: (loading: boolean) => void;
}
export const SwapForm = ({ onChangeResult, onLoading }: SwapFormProps) => {
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
    const fromAssetInfo = ASSETS[swapFrom];
    const toAssetInfo = ASSETS[swapTo];

    onLoading(true);
    if (swap === 'Uniswap') {
      findUniswapBestRoute(
        amount,
        fromAssetInfo.address,
        fromAssetInfo.decimals,
        swapFrom,
        toAssetInfo.address,
        toAssetInfo.decimals,
        swapTo
      ).then(result => onChangeResult(JSON.stringify(result)));
    }
    
    if (swap === 'Curve') {
      findCurveBestRoute(
        amount,
        fromAssetInfo.address,
        toAssetInfo.address,
      ).then(result => onChangeResult(JSON.stringify(result)));
    }

    if (swap ==='Balancer') {
      findBalancerBestRoute(
        parseUnits(amount, fromAssetInfo.decimals).toString(),
        fromAssetInfo.address,
        toAssetInfo.address,
        1
      ).then(result => onChangeResult(JSON.stringify(result)));
    }
  }

  return (
    <div className='swap-container'>
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
    </div>
  );
};
