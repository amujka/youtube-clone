import {Search} from '@mui/icons-material'

const SearchBar = () => {
	return (
		<div className='flex gap-1 items-center bg-white py-2 px-4 rounded-full'>
			<input type="text" className='w-full h-full bg-transparent  outline-none' placeholder='Search...' value='' onChange={()=>{}} />
			<button type='submit'>
				<Search className='text-red-500'/>
			</button>
		</div>
	)
}

export default SearchBar