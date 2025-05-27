import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";

function Edit(props) {
  const navigate = useNavigate();
  let params = useParams();
  console.log("수정idx", params.idx);

  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php"
  let parameter = "apikey=571ec2efb02807dbf7a55e854c462883&tname=nboard_news&idx="+params.idx;

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  useEffect(function(){
      fetch(requestUrl + "?" + parameter)
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        setWriter(json.name);
        setTitle(json.subject);
        setContents(json.contents);
      });

      return ()=>{
        console.log('useEffect실행==>컴포넌트 언마운트');
      }
    },[]);

  return (<>
    <header>
      <h2>게시판 - 수정</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link>
    </nav>
    <article>
    <form onSubmit={
      (event) => {
        event.preventDefault();

        let i = event.target.idx.value;
        let w = event.target.writer.value;
        let t = event.target.title.value;
        let c = event.target.contents.value;
        console.log(w, t, c);

        fetch('http://nakja.co.kr/APIs/php7/boardEditJSON.php', {
          method:'POST',
          headers: {
            'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: new URLSearchParams({
            apikey: 'e7d005e5e98b3dc624ed414b061ec03a',
            tname: 'nboard_news',
            id: 'jsonAPI',
            name: w,
            subject: t,
            content: c,
            idx: i,
          }),
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        navigate("/list");
        }
      }>  
        <input type='hidden' name='idx' value={params.idx} />
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th>
              <td><input type="text" name="writer" value={writer} onChange={(event) => {
                  setWriter(event.target.value);
              }} 
              /></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" value={title} onChange={(event) => {
                  setTitle(event.target.value);
              }}
              /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" rows="3" value={contents} onChange={(event) =>{
                  setContents(event.target.value);
              }}
              ></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
    </form>
    </article>
  </>);
}

export default Edit;