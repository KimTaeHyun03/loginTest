import {useState, useEffect} from 'react';
import axios from 'axios';
import './../css/signIn.css';


let SignIn = ()=>{
				
				let [id,chId]=useState('');
				let [pw,chPw]= useState('');
				let [rePw,chrePw] = useState('');
				
								let idChk = async () =>{
								try{
												let res = await axios.post('http://localhost:3030/api/checkId',{
																idCheck:id
												});
												alert('사용 가능한 아이디입니다');
												
								
				} catch(error) {
								alert('이미 사용중인 아이디입니다. 다시 설정하세요');
				}
};
				
				
				let pwChk = ()=>{
								pw===rePw ? alert('비밀번호 일치') : alert('비밀번호를 다시 확인해주세요');				
				}
				
				return(
				<>
								<h1>회원가입</h1>
								<div>
												<input type='text' placeholder='아이디 입력' onChange={(e)=>{
																chId(e.target.value);
												}}/>
												<button onClick={()=>{idChk()}} >아이디 중복확인</button>
												<input type='password' placeholder='비밀번호 입력' onChange={(e)=>{
																chPw(e.target.value);
												}} />
												<input type='password' placeholder='비밀번호 재입력' onChange={(e)=>{
																chrePw(e.target.value);
												}} />
												<button onClick={()=>{pwChk()}}>비밀번호 확인</button>
				{
								/*
				<>{pw}:{rePw}</>
								*/
				}
								
								
								</div>
				</>
				)
}

export default SignIn;