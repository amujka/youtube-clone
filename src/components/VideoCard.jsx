import React from 'react'

const VideoCard = ({video}) => {
	return (
		<div className='col-span-12 md:col-span-4 xl:col-span-3 cursor-pointer  h-full'>
			<img className='w-full aspect-[4/3]' src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
			<div className='flex flex-col justify-between p-2 h-[100px]'>
				<p className='font-bold line-clamp-2'>{video.snippet.title}</p>
				<small className='text-gray-400'>{video.snippet.channelTitle}</small>
			</div>
		</div>
	)
}

export default VideoCard