import { useEffect } from 'react';
import './App.css'
import { Page } from './stories/BestRoute/Page/Page';
import { useBalancerInit } from './utils/balancer';
import { useCurveInit } from './utils/curve';

function App() {
  const { balancerInit, loading: balancerLoading } = useBalancerInit();
  const { curveInit, loading: curveLoading } = useCurveInit();

  useEffect(() => {
    balancerInit();
    curveInit();
  }, []);

  return (
    <div className="App">
      <Page initLoading={ balancerLoading || curveLoading }/>
    </div>
  )
}

export default App
