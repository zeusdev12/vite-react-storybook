import React, { useState } from 'react';

import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SwapForm } from '../SwapForm/SwapForm';
import { TextArea } from '../TextArea/TextArea';


export const Page = () => {
  const [result, setResult] = useState('');

  const onChangeResult = (result: string) => {
    setResult(result);
  }

  return (
    <article>
      <Header/>

      <section>
        <SwapForm onChangeResult={onChangeResult}/>
        <TextArea value={result}/>
      </section>

      <Footer/>
    </article>
  );
};
