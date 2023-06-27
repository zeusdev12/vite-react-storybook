import React, { useEffect, useState } from 'react';

import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SwapForm } from '../SwapForm/SwapForm';
import { TextArea } from '../TextArea/TextArea';
import { GridLoader } from 'react-spinners';

interface PageProps {
  /**
   * loading flag for balancer and curve init
   */
  initLoading: boolean
}

export const Page = ({ initLoading }: PageProps) => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(initLoading);

  useEffect(() => {
    setLoading(initLoading);
  }, [initLoading]);

  const onChangeResult = (result: string) => {
    setResult(result);
    setLoading(initLoading);
  }

  return (
    <article>
      { loading ? 
          <div className='loading-container'>
            <GridLoader color="#36d7b7"/>
          </div>
        : <></>
      }
      
      <Header/>

      <section>
        <SwapForm onChangeResult={onChangeResult} onLoading={(loading) => setLoading(initLoading || loading)}/>
        <TextArea value={result}/>
      </section>

      <Footer/>
    </article>
  );
};
