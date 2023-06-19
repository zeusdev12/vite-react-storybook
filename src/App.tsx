import './App.css'
import { Page } from './stories/BestRoute/Page/Page';
import { balancerInit } from './utils/balancer';
import { curveInit } from './utils/curve';

function App() {
  balancerInit();
  curveInit();

  return (
    <div className="App">
      <Page/>
    </div>
  )
}

export default App
