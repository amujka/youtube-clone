import React from 'react'

const ChannelCard = ({channel}) => {
	return (
		<div className='col-span-12 md:col-span-4 xl:col-span-3 flex flex-col items-center cursor-pointer'>
			<img className='h-3/4 rounded-full overflow-hidden' src={channel.snippet.thumbnails.high.url} alt="channel" />
			<p className='font-bold line-clamp-2 p-2'>{channel.snippet.title}</p>
		</div>
	)
}

export default ChannelCard