import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
const Navbar = () => {
	return (
		<div className='flex items-center justify-between mb-2 py-2 px-4'>
			<Link to={'/'}>
				<img className='h-10' src="https://i.ibb.co/s9Qys2j/logo.png" alt="Logo" />
			</Link>
			<SearchBar/>
		</div>
	)
}

export default Navbar