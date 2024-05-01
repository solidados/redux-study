import { ReactElement } from 'react';
import CashCounter from './components/CashCounter.tsx';

import "./App.css";

function App(): ReactElement {
  return (
    <div className={"app"}>
      <CashCounter />
    </div>
  );
}

export default App;
