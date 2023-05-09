import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { findUniswapBestRoute } from './utils/uniswap';
import { balancerInit, findBalancerBestRoute } from './utils/balancer';
import { curveInit, findCurveBestRoute } from './utils/curve';

function App() {
  const [count, setCount] = useState(0);

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
