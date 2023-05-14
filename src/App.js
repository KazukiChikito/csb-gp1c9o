import "./App.css";
import React from 'react';
import CountdownTimer from './CountdownTimer/CountdownTimer.js';
import ItemsGrid from './ItemsGrid/ItemsGrid.js';

function App() {
  const DAY_MS=86400000;
  const undeterminedNumberOfDays = Math.ceil(Math.random() * 7) * DAY_MS;
  const undeterminedFutureDay = undeterminedNumberOfDays + Date.now();
  
  return (<>
    <h1>Fumo Shop</h1>
    <CountdownTimer expireDate={undeterminedFutureDay}/>
    <ItemsGrid />
    </>);
}

export default App;