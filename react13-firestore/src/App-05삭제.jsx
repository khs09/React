import { useEffect, useState } from 'react';
import './App.css'
import { deleteDoc, doc, getDocs, collection, getDoc } from 'firebase/firestore';
import { firestore } from './firestoreConfig';

function App() {
  const [showData, setShowData] = useState([]);
  useEffect(()=> {

  const getCollection = async () => {
    let trArray = [];
    const querySnapshot = await getDocs(collection(firestore, "members"));
    querySnapshot.forEach((doc) => {
      let memberInfo = doc.data();
      trArray.push (
        <option key={doc.id} value={doc.id}>{memberInfo.name}</option>
      );
    });
    return trArray;
  }
  getCollection().then((result)=>{
    console.log('result', result);
    setShowData(result);
  });
}, []);

const [id, setId] = useState('');
const [pass, setPass] = useState('');
const [name, setName] = useState('');

  return (
    <div className='App'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <h2>Firebase - Firestore 연동 App</h2>
      <h3>개별 조회 및 삭제하기</h3>
      <form onSubmit={async (event) => {
        event.preventDefault();
        let id = event.target.id.value;
        console.log("삭제", id);
        if(id===''){ alert('사용자를 먼저 선택해주세요' ); return;}

        await deleteDoc(doc(firestore, "members", event.target.id.value));

        setId('');
        setPass('');
        setName('');
      }}>
        <div class="input-group" id="myform">
          <select className="form-control" onChange={async (e)=>{
            let user_id = e.target.value;

            const docRef = doc(firestore, "members", user_id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              let callData = docSnap.data();
              setId(user_id);
              setPass(callData.pass);
              setName(callData.name);
            }
            else {
              console.log("No such document!");
            }
          }}>
            <option value="">선택하세요</option>
            {showData}
          </select>
          <button type="submit" className="btn btn danger">삭제</button>
        </div>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>컬렉션(테이블)</td>
              <td><input type="text" name ="collection" defaultValue="members" className='from-control'/></td>
            </tr>
            <tr>
              <td>아이디(변경불가)</td>
              <td><input type="text" name ="id" defaultValue={id} className='from-control'/></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type="text" name ="pass" defaultValue={pass}className='from-control'/></td>
            </tr>
            <tr>
              <td>이름</td>
              <td><input type="text" name ="name" defaultValue={name} className='from-control'/></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;