import React, { useEffect, useState } from "react";
import axios from "axios";
import './../css/list.css';

const List = () => {
  const [userData, setUserData] = useState([]); // 사용자 데이터를 저장할 상태
  const [error, setError] = useState(null); // 에러 메시지 상태
  
let show = ()=>{
  
}  
  
  
  
  useEffect(() => {
    // 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/data/get'); // 서버에서 데이터 가져오기
        setUserData(response.data || []); // 가져온 데이터를 상태에 저장 (users 배열)
      } catch (err) {
        setError(err.message); // 에러 발생 시 상태에 저장
      }
    };

    fetchData(); // 비동기 함수 호출
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  // 에러 발생 시 화면
  if (error) return <div>Error: {error}</div>;

  // 데이터 렌더링
  return (
  <>
  						<h1>게시물 목록</h1>
  						<div className='contentBox'>
      <ul>
  														<hr/>
        {userData.map((user, index) => (
          <li key={index} >
          		<div className='content'>  
          						<span className='contentLi'>{user.title} - {user.content} </span>
          						<span className='delContent' onClick=()=>{show}>전체글 보기</span>
          		</div>
          		<hr/>
          </li>
          
        ))}
      </ul>
    </div>
  </>
  );
};

export default List;