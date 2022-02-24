import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // ES6 destructuring 문법
  let [글제목, 글제목변경] = useState('글제목을 입력하세요');
  let [글제목1, 글제목변경1] = useState('글제목1을 입력하세요');
  let [글제목2, 글제목변경2] = useState('글제목2를 입력하세요');
  return (
    <div className="App">
      {/* Nav-bar */}
      <div className="black-nav">
        <div>Benkim Velog</div>
      </div>
      <div className="list">
        <h3> { 글제목 } </h3>
        <p>발행일자: 2월 24일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목1 } </h3>
        <p>발행일자: 2월 24일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목2 } </h3>
        <p>발행일자: 2월 24일</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

/*

 <state 만들고 관리하기>
  0) state : 변수 대신 쓰는 데이터 저장공간
  1) 상단 import 코드 수정 => import React, { useState } from 'react';
  2) function app 함수 상단에 => useState('남자 코트 추천'); 이런식으로 입력
      - useState('남자 코트 추천'); [a, b] 이런식으로 데이터 2개가 어레이 형태로 나옴
      - a 변수 => useState('남자 코트 추천'); 데이터가 그대로 들어감
      - b => a변수를 수정해주는 함수
  3) useState()안에는 문자, 숫자, array, object 모두 저장가능
  4) state에 데이터 저장해놓는 이유: 웹이 app처럼 동작하게 만들고 싶어서
      - state는 변경되면 HTML이 새로고침 없이 자동으로 재렌더링이 되기 때문 (변수는 안됨)
  
  결론) 자주 바뀌는 중요한 데이터는 변수 말고 state로 저장해서 쓰자


 <JS destructuring 문법>
  ex) let [name, age] = ['kim', 20];
    - 왼쪽 오른쪽 형식 똑같이 맞춰주면 알아서 자동으로 변수가 생성됨

*/