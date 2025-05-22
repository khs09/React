import { useState } from 'react';
import './App.css'
import ViewComponent from './component/ViewComponent';
import ListComponent from './component/ListComponent';
import WriteComponent from './component/WriteComponent';

function App() {
  const [mode, setMode] = useState('list');
  let contents = '';
  if (mode==="view") {
    contents = <ViewComponent changeMode={(pmode)=>{setMode(pmode)}}></ViewComponent>
  }else if (mode==="write") {
    contents = <WriteComponent 
    changeMode={(pmode)=>{setMode(pmode)}}></WriteComponent>;
  }else {
    contents = <ListComponent changeMode={(pmode)=>{setMode(pmode)}}></ListComponent>;
  }


  return (
    <div className='App'>
      <h2>React - 모듈화</h2>
      {contents}
      </div>
  );
}

export default App