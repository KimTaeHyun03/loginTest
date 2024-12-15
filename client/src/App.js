//라이브러리 임포트
import { Route, Routes } from "react-router-dom";

//페이지 임포트
import './App.css';
import Nav from './page/nav.js';
import Main from './page/main.js';
import Login from './page/login.js';
//앱 컴포넌트
function App() {
  
  return (
    <div className="App">
  <Nav/>
  
  
  
  
  <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/" element={<Main/>} />
      <Route path="/" element={<Main/>} />
      <Route path="/info" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  
  
  
      
    </div>
  );
}

export default App;
