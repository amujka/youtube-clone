import {Search} from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const navigate= useNavigate()
	const submitHandler=(e)=>{
		e.preventDefault()
		if (searchTerm) {
			navigate(`/search/${searchTerm}`)
			setSearchTerm('')
		}
	}
	return (
		<form className='flex gap-1 items-center bg-white py-2 px-4 rounded-full' onSubmit={submitHandler}>
			<input type="text" className='w-full h-full bg-transparent  outline-none text-red-500' placeholder='Search...' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
			<button type='submit'>
				<Search className='text-red-500'/>
			</button>
		</form>
	)
}

export default SearchBar