//라이브러리 임포트
import { Route, Routes } from "react-router-dom";

//페이지 임포트
import './App.css';
import Nav from './page/nav.js';
import Main from './page/main.js';
import Login from './page/login.js';
import Insert from './page/insert.js';
import List from './page/list.js';
import SignIn from './page/signIn.js';
//앱 컴포넌트
function App() {
  
  return (
    <div className="App">
  <Nav/>
  
  
  
  
  <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/insert" element={<Insert/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/info" element={<div>정보창</div>} />
      <Route path="/login" element={<Login/>} />
  										<Route path="/signIn" element={<SignIn/>} />
    </Routes>
  
  
  
      
    </div>
  );
}

export default App;
