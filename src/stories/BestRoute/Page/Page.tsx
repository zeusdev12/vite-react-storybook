import React from 'react';

import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SwapForm } from '../SwapForm/SwapForm';


export const Page = () => {

  return (
    <article>
      <header>
        <Header/>
      </header>

      <SwapForm/>

      <footer>
        <Footer/>
      </footer>
    </article>
  );
};
