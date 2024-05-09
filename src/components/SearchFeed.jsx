import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Videos from "./Videos"

const SearchFeed = () => {
let {searchTerm}=useParams()
    const {data:videos,isPending,error} = useFetch(`search?part=snippet&maxResults=50&q=${searchTerm}`,searchTerm)
    return (
        <div className='flex flex-col lg:flex-row max-w-7xl mx-auto'>
            <div className="lg:flex-1 flex flex-col gap-4 px-4">
                {
                isPending ? <div className=' flex items-center justify-center h-full text-4xl font-bold'>Loading...</div>:
                error ? <div className=' flex flex-col items-center gap-4 justify-center h-full'>
                    <h1 className=' text-7xl text-red-500 font-bold'>{error?.status}</h1>
                    <p className=' text-2xl font-bold'>{error.message}</p>
                </div> :
                <>
                    <h4 className='font-bold text-3xl'>{searchTerm} <span className='text-red-500'>videos</span></h4>
                    <Videos videos={videos} canScroll={true}/>
                </>
                }
            </div>
        </div>
    )
}

export default SearchFeed