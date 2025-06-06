import './App.css'

function Header(props) {
  return(
    <header>
    <h2>게시판-목록</h2>
  </header>
  );
}

function Nav() {
  return(
    <nav>
    <a href="/">글쓰기</a>
  </nav>
  );
}
function Article() {
  return(
    <article>
    <table id ="boardTable">
      <thead>
        <tr>
          <td>No</td>
          <td>제목</td>
          <td>작성자</td>
          <td>날짜</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="cen">1</td>
          <td>오늘은 React공부하는날</td>
          <td class="cen">홍길동</td>
          <td class="cen">2025-05-20</td>
        </tr>
      </tbody>
    </table>
  </article>
  )
}
function App() {


  return (
    <div className='App'>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
      </div>
  )
}

export default App
