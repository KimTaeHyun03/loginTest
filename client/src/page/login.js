import axios from 'axios'
import {useState, useEffect} from 'react';
import './../css/login.css'

let Login = ()=>{
				let url=process.env.URL;
				let [id,setId] = useState('');
				let [pw,setPw] = useState('');
				
				let loginTest = async () =>{
								try{
												let res = await axios.post('http://localhost:3030/api/login',{
																idSend:id,
																pwSend:pw,
												});
												alert('성공');
												
								
				} catch(error) {
								alert('실패');
				}
};
{/*
				const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/data', {
        id: id, // useState로 관리되는 값
        pw: pw,
      });
      console.log(response.data); // 서버에서 받은 응답
      alert('Data sent successfully!');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
				*/}
				return(
				<>
				<div className='loginBar' >
				 <input type='text' placeholder='id를 입력하세요' onChange={(e)=>{
          setId(e.target.value);
         }} ></input>
				<input type='password' placeholder='pw를 입력하세요' onChange={(e)=>{
          setPw(e.target.value);
         }} ></input>
				<br></br>
				
				{/*
				{
								id || pw ? <div>{id}-{pw}</div> : null
				}
				*/}
				</div>
				
				<div className='btn'>
				<span className='loginBtn' onClick={loginTest}>
								로그인
				</span>
				</div>
				
				
				</>
				)}
export default Login;