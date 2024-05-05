import {useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'

import {fetchFromApi} from '../utils/apis'

const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New')
const [videos, setVideos] = useState([])
const [isPending, setIsPending] = useState(true)
  useEffect(()=>{

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(data => {
      setVideos(data.items)})
      setIsPending(false)
  },[selectedCategory])
  return (
	<div className='flex flex-col lg:flex-row'>
    <Sidebar 
      selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}
    />
      
    <div className="lg:flex-1 flex flex-col gap-4 px-4">
      <h4 className='font-bold text-3xl'>{selectedCategory} <span className='text-red-500'>videos</span></h4>
      <Videos videos={videos} isPending={isPending} canScroll={true}/>
    </div>
  </div>
  )
}

export default Feed