import {useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'

import {fetchFromApi} from '../utils/apis'

const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New')
const [videos, setVideos] = useState([])
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items))
  },[selectedCategory])
  return (
	<div className='flex flex-col lg:flex-row'>
    {/* sidebar */}
    <div className=" lg:basis-[250px] shrink-0 px-4 border-r border-red-500">
      <Sidebar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
      />
      
    </div>
    {/* videos list */}
    <div className="flex flex-col gap-4 px-4">
      <h4 className='font-bold text-3xl'>{selectedCategory} <span className='text-red-500'>videos</span></h4>
      <Videos videos={videos} selectedCategory={selectedCategory}/>
    </div>
  </div>
  )
}

export default Feed