import './App.css'

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Verdana"
  };
  return (
    <div className='App'>
      <h2>React - Style지정하기</h2>
      <ol>
        <li style={{color : "red"}}>프론트앤드</li>
        <ul style={mystyle}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>jQuary</li>
        </ul>
      <li className='backEnd'>백앤드</li>
        <ul>
          <li id='backEndSub'>Java</li>
          <li class='warnings'>Oracle</li>
          <li>JSP</li>
          <li>Spirng Boot</li>
        </ul>
      </ol>
    </div>
  );
}

export default App
