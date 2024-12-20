import {useState, useEffect} from 'react';
import axios from 'axios';
import './../css/insert.css';


let Insert = ()=>{
				
				let [title,setTitle] = useState('');
				let [content,setContent] = useState('');
				
				
				let submit = async()=>{
								try{
												let res = await axios.post('http://localhost:3030/data/add',{
																titleSend:title,
																contentSend:content
												});
												alert('성공');
												
								
				} catch(error) {
								alert('실패');
				}
								
				}
				
				return(
				<div>
								<div className='inputContent'>
												<textarea type='text' placeholder = '제목입력하세요.' className='titleInput' onChange={(e)=>{
																setTitle(e.target.value);
												}}>
												</textarea>
				
												<textarea type='text' placeholder = '내용 입력하세요.' className='contentInput' onChange={(e)=>{
																setContent(e.target.value);
												}}>
												</textarea>
												<hr/>
												<span className='submitBtn' onClick={()=>{submit()} }>등록</span>
								</div>
								<div>{title} : {content}</div>
				</div>
				)
}

export default Insert;