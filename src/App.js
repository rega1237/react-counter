import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [numClick, setNumClick] = useState(0);

  const addNumber = () => {
    setNumClick(numClick + 1);
  };

  const resetNumber = () => {
    setNumClick(0);
  };

  return (
    <div className="App">
      <h1>COUNTER</h1>
      <div className="principalContainer">
        <Counter clickNumber={numClick} />
        <Button
          text="Add Number"
          typeButton
          clickAction={addNumber}
        />
        <Button
          text="Reset Counter"
          typeButton={false}
          clickAction={resetNumber}
        />
      </div>
    </div>

  );
}

export default App;
