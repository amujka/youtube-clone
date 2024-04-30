import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
	return (
		<div>
			<ul className='flex overflow-x-auto lg:flex-col gap-4 lg:overflow-y-auto'>
			{
				categories.map(category => (
					<li 
						className={`flex items-center gap-4 text-white hover:bg-red-500 rounded-full px-2 py-1 ${selectedCategory===category.name?'bg-red-500':''}`}
						key={category.name}
						onClick={()=>setSelectedCategory(category.name)}
					>
						<span>{category.icon}</span><span>{category.name}</span> 
					</li>
				))
			}
			</ul>
			<p>Copyright Alen &copy; 2024</p>
		</div>
	)
}

export default Sidebar