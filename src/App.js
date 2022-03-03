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

      <Modal />

    </div>
  );

}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

/*

 <React Component?>
  - 반복되는 HTML 덩어리들, 자주 바뀌는 내용들, 다른 페이지들을 컴포넌트로 관리해주는것이 좋음
  - 단점) 상위요소에 만들어진 state 쓸 때 복잡해짐(props 문법으로 해결하자)



  0) Component 만들 위치는 function App()과 형제 위치
  
  1) Component 작명시 시작은 대문자로 

    function Modal() {
      return (
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
      )
    }

  2) component 만들 때 return 내부에 형제요소를 넣을 수 없고 div로 묶어줘야 하는데
     의미없는 <div>로 감싸기 싫으면 <></> 사용할 것 (fragments 문법)
    
    function Modal() {
      return (
        <>
          <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
          </div>

          <div>
          </div>
        </>
      )
    }

  3) 컴포넌트 안에 다른 컴포넌트가 들어갈 수 있음

    function Modal(){
      return (
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
          <Modaltwo></Modaltwo>
        </div>
      )
    }
    
    function Modaltwo(){
      return (
        <div>안녕</div>
      )
    }

*/