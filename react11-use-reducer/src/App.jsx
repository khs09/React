import './App.css';
import { useReducer, useState } from 'react';

const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          cursor: 'pointer',
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({ type: 'mark', id });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: 'delete', id });
        }}
      >
        삭제
      </button>
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const newStudent = {
        id: Date.now(),
        name: action.param.name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    }
    case 'delete':
      return {
        count: state.count - 1,
        students: state.students.filter(student => student.id !== action.id),
      };
    case 'mark':
      return {
        ...state,
        students: state.students.map(student =>
          student.id === action.id
            ? { ...student, isHere: !student.isHere }
            : student
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: '김철수',
      isHere: false,
    },
  ],
};

function App() {
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <p>총학생수 : {studentInfo.count}</p>
      <input
        type='text'
        placeholder='이름을 입력하세요'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (name.trim()) {
            dispatch({ type: 'add', param: { name } });
            setName('');
          }
        }}
      >
        추가
      </button>
      {studentInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}

export default App;