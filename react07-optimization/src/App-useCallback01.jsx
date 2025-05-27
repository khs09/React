import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [countNumber, setCountNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  const somthingGood = () => {
    console.log(`somethingGood호출 : ${countNumber}, ${randomNumber}`);
    return;
  }

  useEffect(()=> {
   console.log('somethingGood() or randomGood() 변경됨');
  }, [somthingGood]);

  return (
    <div className="App">
      <h2>useCallback()</h2>
      <input type='number' value={countNumber}
        onChange={(e) => setCountNumber(e.target.value)}
      />
      <button onClick={() => {
        setRandomNumber(Math.random());
      }}>
        난수 : ${randomNumber}
      </button>
      <br />
      <button onClick={somthingGood}>somethingGood호출</button>
    </div>
  );
}

export default App