import React from 'react'

const Videos = ({videos}) => {
	console.log("videos",videos);
  return (
	<div className='grid grid-cols-12 gap-4'>
		{
			videos.map((video,index) => (
				<div className='col-span-12 md:col-span-4 lg:col-span-2 bg-red-400' key={video.id.videoId}>
					<img className='w-full h-auto object-cover' src={video.snippet.thumbnails.high.url} alt="video" />
					<p className='line-clamp-3'>{video.snippet.title}</p>
				</div>
			))
		}
	</div>
  )
}

export default Videos