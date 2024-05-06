import {useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'

import {fetchFromApi} from '../utils/apis'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const [errors, setErrors] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(()=>{

    fetchFromApi(`search?part=snippet&maxResults=50&q=${selectedCategory}`)
    .then(data => setVideos(data.items))
    .catch(error => {
      setErrors(error)
    })
    setIsPending(false)
  },[selectedCategory])
  return (
	<div className='flex flex-col lg:flex-row'>
    <Sidebar 
      selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}
    />
    <div className="lg:flex-1 flex flex-col gap-4 px-4">
      {
        isPending ? <div className=' flex items-center justify-center h-full text-4xl font-bold'>Loading...</div>:
        errors ? <div className=' flex flex-col items-center gap-4 justify-center h-full'>
          <h1 className=' text-7xl text-red-500 font-bold'>{errors?.status}</h1>
          <p className=' text-2xl font-bold'>{errors.message}</p>
        </div> :
        <>
          <h4 className='font-bold text-3xl'>{selectedCategory} <span className='text-red-500'>videos</span></h4>
          <Videos videos={videos} canScroll={true}/>
        </>
      }
    </div>
  </div>
  )
}

export default Feed