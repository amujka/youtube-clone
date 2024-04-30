import React from 'react'

const ChannelCard = ({channel}) => {
  return (
	<div className='bg-gray-700'>
		<img className='w-full h-auto object-cover' src={channel.snippet.thumbnails.high.url} alt="channel" />
		<p className='line-clamp-3 p-2'>{channel.snippet.title}</p>
	</div>
  )
}

export default ChannelCard