import React from 'react'

const VideoCard = ({video}) => {
  return (
	<div className='w-full h-full bg-gray-700'>
		<img className='w-full h-auto object-cover' src={video.snippet.thumbnails.high.url} alt="video" />
		<p className='line-clamp-3 p-2'>{video.snippet.title}</p>
	</div>
  )
}

export default VideoCard