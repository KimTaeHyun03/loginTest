import {useState, useEffect} from 'react';
import axios from 'axios';
import './../css/signIn.css';


let SignIn = ()=>{
				
				
				
				return(
				<>
								<h1>회원가입</h1>
								<div>
												<input type='text' placeholder='아이디 입력' />
												<input type='password' placeholder='비밀번호 입력' />
												<input type='password' placeholder='비밀번호 재입력' />
												
								
								
								
								</div>
				</>
				)
}

export default SignIn;