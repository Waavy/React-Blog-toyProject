import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '장승배기 고기 맛집';
  let ind = { color : 'almond', fontSize : '24px' };

  return (
    <div className="App">
      {/* Nav-bar */}
      <div className="black-nav">
        <div style={ ind }>Benkim Velog</div>
      </div>
      <h4> { posts } </h4>
    </div>
  );
}

export default App;

/*

< JSX 문법 >
  1) react에서는 class=" " 대신 className=" " 사용하기
  2) { }열어서 데이터바인딩 하기
    - 선언된 변수를 사용하려면 사용하고 싶은 위치에서 중괄호 열어 사용하면 됨

*/