import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [switching, setSwitching] = useState(true);

  const switchMode = switching ? 'on(켜짐^^)' : 'off(꺼짐ㅜㅜ)';

  useEffect(()=>{
    console.log("useEffect() 호출됨");
  }, [switchMode]);

  return (
    <div className='App'>
      <h2>정수 카운터</h2>
      <input type="number" value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>토글 스위치</h2>
      <p>스위치 상태(step1) : {switchMode}</p>
      <button onClick={() => setSwitching(!switching)}>스위치조작</button>
    </div>
  );
}

export default App;