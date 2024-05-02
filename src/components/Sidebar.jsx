import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
	return (
		<div className='lg:basis-[250px] shrink-0 px-4 border-r'>
			<ul className='category_list flex overflow-x-auto lg:flex-col gap-4 lg:overflow-y-auto lg:h-[calc(100vh-66px-40px)]'>
			{
				categories.map(category => (
					<li 
						className={`flex items-center gap-4 text-white hover:bg-red-500 rounded-full px-2 py-1 transition-all duration-200 lg:cursor-pointer ${selectedCategory===category.name?'bg-red-500':''}`}
						key={category.name}
						onClick={()=>setSelectedCategory(category.name)}
					>
						<span>{category.icon}</span><span>{category.name}</span> 
					</li>
				))
			}
			</ul>
			<p className='my-2'>Copyright Alen &copy; 2024</p>
		</div>
	)
}

export default Sidebar