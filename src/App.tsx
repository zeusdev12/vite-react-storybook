import './App.css'
import { findUniswapBestRoute } from './utils/uniswap';
import { balancerInit, findBalancerBestRoute } from './utils/balancer';
import { curveInit, findCurveBestRoute } from './utils/curve';
import { Page } from './stories/BestRoute/Page/Page';

function App() {
  findUniswapBestRoute(
    '1000',
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    6,
    'USDC',
    '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    18,
    'FRAX'
  ).then(result => console.log(result));

  balancerInit().then(() => {
    findBalancerBestRoute(
      '1000000000',
      '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      '0x853d955aCEf822Db058eb8505911ED77F175b99e',
      1
    ).then(result => console.log(result));
  });

  curveInit().then(() => {
    findCurveBestRoute(
      '1000',
      '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    ).then(result => console.log(result));
  });

  return (
    <div className="App">
      <Page/>
    </div>
  )
}

export default App
