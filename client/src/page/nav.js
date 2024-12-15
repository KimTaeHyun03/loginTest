import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './../css/nav.css';

let Nav = ()=>{
				
				
				
				return(
				<div className='nav'>
				<ul className='ulStyle'>
								<li className='navList'><Link to='/'>Home</Link></li>
								<li className='navList'><Link to='/'>Home</Link></li>
								<li className='navList'><Link to='/'>Home</Link></li>
								<li className='navList'><Link to='/info'>info</Link></li>
								<li className='navList'><Link to='/login'>login</Link></li>
				</ul>
				
				<hr className='divider'></hr>
				</div>
				
				
				)
}
export default Nav;