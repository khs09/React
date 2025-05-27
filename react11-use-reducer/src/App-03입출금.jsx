import './App.css'
import { useReducer, useState} from 'react';

const ActionTypes = {
  depo : 'deposit',
  with : 'withdraw'
}
const myReducer = (nowState, myAction) => {
  console.log("리듀서 함수 호출", nowState, myAction);
  switch (myAction.mode){
    case ActionTypes.depo:
      return nowState + myAction.amount;
    case ActionTypes.with:
      return nowState - myAction.amont;
    default:
      return nowState;
  }
}

function App() {
  const [number, setNumber] = useState(0);
  const [money, myDispatch] = useReducer(myReducer, 0);

  return (
    <div className='App'>
      <h2>useReducer App</h2>
      <p>잔고 : {money}원</p>
      <input type="number" value={number} step={1000}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }
      } />
      <button type='button' onClick={() => {
        myDispatch({mode:ActionTypes.depo, amount:number});
      }}>입금</button>
      <button type='button' onClick={() => {
        myDispatch({mode:ActionTypes.with, amount:number});
      }}>출금</button>
    </div>
  );
}

export default App;