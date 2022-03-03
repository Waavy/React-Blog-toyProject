import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '남자바지 추천','남자시계 추천']);
  let [좋아요갯수, 갯수변경] = useState(0);
  
  function changeHeading() {
    let newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  }


  return (
    <div className="App">
      {/* Nav-bar */}
      <div className="black-nav">
        <div>Benkim Velog</div>
      </div>
      <button onClick={ changeHeading }>글제목 바꾸기</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={() => 갯수변경(좋아요갯수 + 1)}>👍</span> { 좋아요갯수 } </h3>
        <p>발행일자: 2월 24일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>발행일자: 2월 24일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>발행일자: 2월 24일</p>
        <hr/>
      </div>
    </div>
  );
}
export default App;

/*

 <state data 다루기 - 깊은 복사 // immutable data 원칙>
  
  - 미리보는 결론: state는 직접 건드리지 말고 deep copy해서 그녀석을 조지자
  
  - 다음과 같이 데이터 변경 불가 (값을 공유하는 행위임)
  let[글제목, 글제목변경] = useState(['1', '2', '3' ]);

  function 제목바꾸기() {
    var newArray = 글제목;
    newArray[0] = '4';
    글제목변경( newArray );
  }

  - 아래와 같이 spread operator(...) 사용 > es6 신문법
  let[글제목, 글제목변경] = useState(['1', '2', '3' ]);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '4';
    글제목변경( newArray );
  }

*/