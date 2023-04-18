import React from 'react';

import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ComboBox } from '../ComboBox/ComboBox';
import { TextField } from '../TextField/TextField';
import { AssetSwitchButton } from '../AssetSwitchButton/AssetSwitchButton';
import { Button } from '../Button/Button';


export const Page = () => {

  return (
    <article>
      <header>
        <Header/>
      </header>

      <section className='swap-container'>
        <div className='swap-params-box'>
          <label>From Asset: </label>
          <ComboBox options={["USDC", "USDT", "DAI"]}/>
        </div>
        <div className='swap-params-box'>
          <label>Amount: </label>
          <TextField/>
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

      <footer>
        <Footer/>
      </footer>
    </article>
  );
};
