import React from 'react';

import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SwapForm } from '../SwapForm/SwapForm';
import { TextArea } from '../TextArea/TextArea';


export const Page = () => {

  return (
    <article>
      <Header/>

      <section>
        <SwapForm/>
        <TextArea/>
      </section>

      <Footer/>
    </article>
  );
};
